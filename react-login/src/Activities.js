import './Activities.css';
import React from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const Activities = () => {
  const gotoSession = () => {
    window.location.href = './newSession';
  };
  return (
    <div>
      <div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['Rec']}
          onClick={gotoSession}
        >
          <Menu.Item key="Rec" icon={<MailOutlined />}>
            Recommended
          </Menu.Item>

          <Menu.Item key="Ses" icon={<MailOutlined />}>
            My Session
          </Menu.Item>
        </Menu>
      </div>

      <div className="mySession">
        <div className="title">
          <h2>No sessions yet </h2>
          <h3>Create a new session to add activities</h3>
        </div>

        <button className="button-next-session" onClick={gotoSession}>
          {' '}
          New Sessions{' '}
        </button>
      </div>

      <div className="recSession"></div>
    </div>
  );
};

export default Activities;
