'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Award,
  BookOpen,
  Clock,
  FileText,
  MessageSquare,
  Target,
  Timer,
  TrendingUp,
  User,
} from 'lucide-react';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { useAuth } from '@/context/AuthContext/AuthContext';
import { Skeleton } from '../../components/ui/selection';

type SafePieLabelRenderProps = {
  cx?: number | string;
  cy?: number | string;
  midAngle?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
  percent?: number | string;
};

type ApiResponse = {
  user: {
    name?: string | null;
    email: string;
    role?: string;
    profile?: {
      avatarUrl?: string | null;
      bio?: string | null;
      location?: string | null;
      social?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
      };
    } | null;
  } | null;

  stats: {
    resumesCreated: number;
    interviewsPracticed: number;
    codingChallengesAttempted: number;
    profileCompletion: number;
    successScore: number;
    codingAvgPercent?: number;
    jobAvgMatch?: number;
  } | null;

  recentActivities?: Array<{
    type: string;
    title: string;
    timestamp: string | Date;
    meta?: {
      accuracy?: number;
      score?: number;
      total?: number;
      duration?: string;
      difficulty?: "easy" | "medium" | "hard";
    };
  }>;
};

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading || !user) return;

    if (!apiData) {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);
          const email = encodeURIComponent(user.email);
          const res = await axios.get<ApiResponse>(`/dashboard/api/overview?email=${email}`);
          setApiData(res.data);
        } catch (err) {
          console.error(err);
          setError('Failed to load dashboard data');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [user, authLoading, apiData]);

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
  }: SafePieLabelRenderProps) => {
    const cxNum = Number(cx) || 0;
    const cyNum = Number(cy) || 0;
    const midAngleNum = Number(midAngle) || 0;
    const innerRadiusNum = Number(innerRadius) || 0;
    const outerRadiusNum = Number(outerRadius) || 0;
    const percentNum = Number(percent) || 0;
    if (!percentNum) return null;

    const RADIAN = Math.PI / 180;
    const radius = innerRadiusNum + (outerRadiusNum - innerRadiusNum) * 0.5;
    const x = cxNum + radius * Math.cos(-midAngleNum * RADIAN);
    const y = cyNum + radius * Math.sin(-midAngleNum * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cxNum ? 'start' : 'end'}
        dominantBaseline="central"
        style={{ fontSize: '12px', fontWeight: 600 }}
      >
        {`${(percentNum * 100).toFixed(0)}%`}
      </text>
    );
  };

  const stats = apiData?.stats ?? {
    resumesCreated: 0,
    interviewsPracticed: 0,
    codingChallengesAttempted: 0,
    profileCompletion: 0,
    successScore: 0,
    codingAvgPercent: 0,
    jobAvgMatch: 0,
  };

  const statsForUI = [
    { title: 'Study Hours', value: '24h', icon: Clock, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { title: 'Tasks Completed', value: 32, icon: Target, color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { title: 'Focus Sessions', value: 18, icon: Timer, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
    { title: 'Consistency Score', value: '88%', icon: Award, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
  ];

  const activityData = [
    { name: 'Interviews', value: stats.interviewsPracticed || 0, color: '#10B981' },
    { name: 'Resumes', value: stats.resumesCreated || 0, color: '#3B82F6' },
    { name: 'Coding', value: stats.codingChallengesAttempted || 0, color: '#8B5CF6' },
    { name: 'ProfileRemaining', value: Math.max(0, 100 - (stats.profileCompletion || 0)), color: '#F59E0B' },
  ];

  const formatTs = (t?: string | Date) => {
    try { return new Date(String(t)).toLocaleString(); } catch { return '-'; }
  };

  return (

      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {apiData?.user?.name ?? user?.name ?? 'Student'} 👋
          </h1>
          <p className="text-muted-foreground">
            Let’s continue your learning journey today 🚀
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2 bg-card/20" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="p-6 bg-red-50 text-red-700 rounded shadow">{error}</div>
        ) : !apiData ? (
          <div className="p-6 bg-yellow-50 text-yellow-800 rounded shadow">No dashboard data available.</div>
        ) : (
          <>
            {/* TODAY FOCUS */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>📅 Today’s Study Focus</CardTitle>
                <CardDescription>Your planned tasks for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Complete React Hooks Chapter</span>
                  <span className="text-sm text-green-500">In Progress</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Practice 5 JavaScript Problems</span>
                  <span className="text-sm text-yellow-500">Pending</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Revise API Concepts</span>
                  <span className="text-sm text-gray-400">Not Started</span>
                </div>
              </CardContent>
            </Card>

            {/* STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsForUI.map(stat => (
                <Card key={stat.title} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* PieChart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-indigo-500" />
                    Subject Distribution
                  </CardTitle>
                  <CardDescription>Time spent per subject</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={activityData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {activityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => [value, 'Count']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* BarChart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                    Weekly Study Overview
                  </CardTitle>
                  <CardDescription>Counts of study tasks per type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={activityData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                        <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} interval={0} angle={-15} textAnchor="end" />
                        <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} />
                        <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} formatter={(value: number) => [value, 'Count']} />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        {activityData.map((entry, index) => (
                          <Bar
                            key={entry.name}
                            dataKey="value"
                            name={entry.name}
                            fill={entry.color}
                            barSize={24}
                            radius={[6, 6, 0, 0]}
                            background={{ fill: 'rgba(0,0,0,0.05)' }}
                          />
                        ))}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI INSIGHTS */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>🤖 AI Study Insights</CardTitle>
                <CardDescription>Smart recommendations based on your progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>✔ You perform best in the evening (7PM - 9PM)</p>
                <p>⚠ JavaScript accuracy dropped by 10% this week</p>
                <p>🚀 You are 20% more productive using Focus Mode</p>
              </CardContent>
            </Card>

            {/* PERFORMANCE SUMMARY */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>📈 Learning Performance Summary</CardTitle>
                <CardDescription>Quick summary from backend</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p>Average Study Accuracy: <strong>{stats.codingAvgPercent}%</strong></p>
                  <p>Weekly Consistency: <strong>{stats.jobAvgMatch}%</strong></p>
                  <p>Overall Learning Score: <strong>{stats.successScore}</strong></p>
                  <div className="mt-4">
                    <div className="text-xs">Profile completion</div>
                    <div className="h-2 rounded-full mt-1 overflow-hidden">
                      <div style={{ width: `${stats.profileCompletion}%` }} className="h-full bg-green-500 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RECENT ACTIVITY */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>🕒 Recent Study Activity</CardTitle>
                <CardDescription>Your latest study activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(apiData?.recentActivities?.length ?? 0) === 0 ? (
                    <p className="text-sm text-gray-500">No recent activities found.</p>
                  ) : (
                    apiData.recentActivities!.map((a, i) => (
                      <div key={i} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="p-2 rounded-full bg-gray-100"><Clock className="h-4 w-4" /></div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{a.title}</p>
                          <p className="text-sm text-gray-500">{formatTs(a.timestamp)}</p>
                          {a.type === 'coding' && a.meta && (
                            <div className="mt-1 text-xs text-gray-500">
                              {a.meta.accuracy != null ? `Accuracy: ${a.meta.accuracy}%` :
                               a.meta.score != null && a.meta.total != null ? `Score: ${a.meta.score}/${a.meta.total}` : null}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
  
  );
};

export default Dashboard;
