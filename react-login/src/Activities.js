import './Activities.css';
import React from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import drawing from './drawing.png';
import math from './math.png';
import boat from './boat.png';
import drum from './drum.png';
import { Card } from 'antd';

const { Meta } = Card;

const Activities = () => {
  const gotoSession = () => {
    window.location.href = './newSession';
  };

  const [SesMode, setSesMode] = useState('Rec');

  const changeSesMode = () => {
    setSesMode(SesMode === 'Rec' ? 'Rec' : 'Ses');
  };

  const gotoDrawing = () => {
    window.location.href =
      'https://cassie106.github.io/GIXMirror/activity/masterpiece/';
  };

  if (SesMode === 'Rec') {
    return (
      <div>
        <div className="recSession">
          <h2>Activities</h2>
          <div className="cards">
            <div className="Art">
              <p> Art</p>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={drawing} />}
                onClick={() => gotoDrawing()}
              >
                <Meta
                  title="MasterPiece"
                  description="This is a drawing game."
                />
              </Card>
            </div>

            <div className="Puzzle">
              <p>Puzzle</p>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={math} />}
              >
                <Meta title="Math" description="Interactive with numbers." />
              </Card>
            </div>

            <div className="Sport">
              <p>Sports</p>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={boat} />}
              >
                <Meta title="Boating" description="This is a rowing game." />
              </Card>
            </div>

            <div className="Music">
              <p>Music</p>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={drum} />}
              >
                <Meta title="Beat It" description="This is a druming game." />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Activities;
