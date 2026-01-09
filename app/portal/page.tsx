"use client";

import React, { useState } from 'react';
import { Card, Descriptions, Tag, Table, Upload, Button, Form, Input, DatePicker, Tabs, message, Modal } from 'antd';
import { UploadOutlined, ExclamationCircleOutlined, ClockCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { TextArea } = Input;

export default function CustomerPortal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [messageApi, contextHolder] = message.useMessage();

    // Dummy Data
    const caseDetails = {
        caseId: 'C-4921',
        totalDue: '$4,500.00',
        minDue: '$1,200.00',
        status: 'Pending',
        daysOverdue: 45,
        dueDate: '2025-10-15',
        agency: 'FedEx Recovery'
    };

    const paymentHistory = [
        { key: '1', date: '2025-09-01', amount: '$500.00', method: 'Bank Transfer', status: 'Success' },
        { key: '2', date: '2025-08-01', amount: '$500.00', method: 'Credit Card', status: 'Success' },
    ];

    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
        { title: 'Method', dataIndex: 'method', key: 'method' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text: string) => (
                <Tag color={text === 'Success' ? 'green' : 'red'}>{text}</Tag>
            )
        },
    ];

    const handleUpload = (info: any) => {
        if (info.file.status === 'done') {
            messageApi.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            messageApi.error(`${info.file.name} file upload failed.`);
        }
    };

    const onFinishDispute = (values: any) => {
        messageApi.success('Dispute submitted successfully. Case ID: #' + Math.floor(Math.random() * 10000));
    };

    const onFinishExtension = (values: any) => {
        messageApi.success('Extension request submitted for review.');
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 font-sans">
            {contextHolder}

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-1">Payment Portal</h1>
                    <p className="text-gray-500">Manage your outstanding dues securely</p>
                </div>
                <div className="text-right">
                    <Tag color="orange" className="text-lg py-1 px-3">Limited Access Mode</Tag>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Status Card */}
                <Card className="md:col-span-2 shadow-sm" title="Current Outstanding">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <span className="text-gray-500 block text-sm">Total Dues</span>
                            <span className="text-4xl font-bold text-red-600">{caseDetails.totalDue}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-gray-500 block text-sm">Minimum Due</span>
                            <span className="text-2xl font-semibold text-gray-700">{caseDetails.minDue}</span>
                        </div>
                    </div>

                    <Descriptions bordered column={2}>
                        <Descriptions.Item label="Case ID">{caseDetails.caseId}</Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <Tag color={caseDetails.status === 'Pending' ? 'volcano' : 'green'}>{caseDetails.status}</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label="Days Overdue">{caseDetails.daysOverdue} Days</Descriptions.Item>
                        <Descriptions.Item label="Due Date">{caseDetails.dueDate}</Descriptions.Item>
                    </Descriptions>

                    <div className="mt-6 flex gap-3">
                        <Button type="primary" size="large" icon={<DollarCircleOutlined />}>Pay Now</Button>
                        <Upload onChange={handleUpload}>
                            <Button icon={<UploadOutlined />} size="large">Upload Proof</Button>
                        </Upload>
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card title="Quick Actions" className="shadow-sm h-full">
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                key: '1',
                                label: 'Dispute',
                                children: (
                                    <Form layout="vertical" onFinish={onFinishDispute}>
                                        <Form.Item label="Reason" name="reason" rules={[{ required: true }]}>
                                            <Input placeholder="E.g. Incorrect Amount" />
                                        </Form.Item>
                                        <Form.Item label="Details" name="details">
                                            <TextArea rows={3} placeholder="Describe your issue..." />
                                        </Form.Item>
                                        <Button type="default" htmlType="submit" block icon={<ExclamationCircleOutlined />}>
                                            Raise Dispute
                                        </Button>
                                    </Form>
                                )
                            },
                            {
                                key: '2',
                                label: 'Extension',
                                children: (
                                    <Form layout="vertical" onFinish={onFinishExtension}>
                                        <Form.Item label="Proposed Date" name="date" rules={[{ required: true }]}>
                                            <DatePicker style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item label="Reason" name="reason">
                                            <TextArea rows={2} />
                                        </Form.Item>
                                        <Button type="default" htmlType="submit" block icon={<ClockCircleOutlined />}>
                                            Request Extension
                                        </Button>
                                    </Form>
                                )
                            }
                        ]}
                    />
                </Card>
            </div>

            <Card title="Payment History" className="shadow-sm mt-6">
                <Table dataSource={paymentHistory} columns={columns} pagination={false} />
            </Card>
        </div>
    );
}
