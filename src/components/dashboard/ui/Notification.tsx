import React from 'react';
import { Button, notification, Space } from 'antd';
import { 
    BellOutlined     
  } from '@ant-design/icons';
import Link from 'next/link';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Link href="/user/notification-center">All Notifications</Link>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy This
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={openNotification}>
      <BellOutlined />
      </Button>
    </>
  );
};

export default Notification;