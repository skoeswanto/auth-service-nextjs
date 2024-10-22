'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

export default function Dashboard() {
  const [apiKey, setApiKey] = useState('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
  const [apiSecret, setApiSecret] = useState('••••••••••••••••');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">MedaAuth Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-6">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="apps">Apps</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Total Users</CardTitle>
                  <CardDescription>Active users in your applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">1,234</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Requests</CardTitle>
                  <CardDescription>Total requests in the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">56,789</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Authentication Trends</CardTitle>
                <CardDescription>Monthly authentication requests</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  <Button type="submit">Update Profile</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apps">
            <Card>
              <CardHeader>
                <CardTitle>Application Settings</CardTitle>
                <CardDescription>Manage your MedaAuth application</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div>
                    <Label htmlFor="appName">Application Name</Label>
                    <Input id="appName" placeholder="My Awesome App" />
                  </div>
                  <div className="space-y-2">
                    <Label>Features</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="createUser" />
                      <Label htmlFor="createUser">Allow Create New User</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="useState" />
                      <Label htmlFor="useState">Use State</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="usePKCE" />
                      <Label htmlFor="usePKCE">Use PKCE</Label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="otpMethod">OTP Method</Label>
                    <Select>
                      <SelectTrigger id="otpMethod">
                        <SelectValue placeholder="Select OTP method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="fazpass">FazPass</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>API Key</Label>
                    <div className="flex space-x-2">
                      <Input value={apiKey} readOnly />
                      <Button variant="outline" onClick={() => setApiKey('new-api-key-generated')}>
                        Regenerate
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label>API Secret</Label>
                    <div className="flex space-x-2">
                      <Input value={apiSecret} type="password" readOnly />
                      <Button variant="outline" onClick={() => setApiSecret('new-secret-generated')}>
                        Regenerate
                      </Button>
                    </div>
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}