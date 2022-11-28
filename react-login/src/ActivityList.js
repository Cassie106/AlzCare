import './ActivityList.css';
import React from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

import drawing from './drawing.png';
import painting from './Painting.png';
import chalk from './Chalk.png';
import artists from './Artists.png';
import colorPad from './ColorMatch.png';
import board from './ArtBoard.png';
import square from './square.png';

import math from './math.png';
import boat from './boat.png';
import drum from './drum.png';
import cd from './CDPlayer.png';
import badminton from './Badminton.png';
import football from './Football.png';

import { Card } from 'antd';
import { PageHeader } from 'antd';
import { Col, Divider, Row } from 'antd';

import { Tabs } from 'antd';
import profile from './ProfileLogo.png';
import session from './SessionLogo.png';
import activity from './ActivityLogo.png';
import { Layout } from 'antd';
import { Button, Tooltip, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const style_Art = {
  background: '#BECEFF',
  padding: '10px 10px',
};
const style_Math = {
  background: '#F4B87D',
  padding: '10px 10px',
};
const style_Music = {
  background: '#BBDABC',
  padding: '10px 10px',
};
const style_Sport = {
  background: '#D6ADDD',
  padding: '10px 10px',
};

const { Meta } = Card;

const ActivityList = () => {
  const [SesMode, setSesMode] = useState('Rec');

  const changeSesMode = () => {
    setSesMode(SesMode === 'Rec' ? 'Rec' : 'Ses');
  };

  const gotoDrawing = () => {
    window.location.href =
      'https://cassie106.github.io/GIXMirror/activity/masterpiece/';
  };

  const gotoColorM = () => {
    window.location.href =
      'https://cassie106.github.io/GIXMirror/activity/colormatching/';
  };

  const gotoArtSoc = () => {
    window.location.href =
      'https://cassie106.github.io/GIXMirror/activity/artsocial/';
  };

  const gotoSession = () => {
    window.location.href = './Session';
  };

  const gotoActivity = () => {
    window.location.href = './activityList';
  };

  const gotoProfile = () => {
    window.location.href = './profile';
  };

  if (SesMode === 'Rec') {
    return (
      <div className="recSession">
        {/* ************* Tab1 ************** */}
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Activity" key="1">
            <PageHeader
              style={{
                border: '1px solid rgb(235, 237, 240)',
              }}
              // onBack={() => null}
              title="Activity"
              subTitle="Choose a Activity to play from the catagory below."
            />

            <Divider orientation="left">Art</Divider>
            {/* ---------------- Art ---------------- */}
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={drawing} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={colorPad} />}
                    onClick={() => gotoColorM()}
                  >
                    <Meta
                      title="Color Matching"
                      description="Let's try the tangible dots."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={painting} />}
                    onClick={() => gotoArtSoc()}
                  >
                    <Meta
                      title="PaintingTool"
                      description="This is a art social game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={chalk} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="RockChalk!"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={artists} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="Art Board"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={drawing} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={board} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Art}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={square} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
            </Row>

            {/* ---------------- Math ---------------- */}
            <Divider orientation="left">Math</Divider>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={math} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="NumberMatch"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={colorPad} />}
                    onClick={() => gotoColorM()}
                  >
                    <Meta
                      title="Coloar Matching"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={chalk} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="RockChalk!"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={painting} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="PaintingTool"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={artists} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="Art Board"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={drawing} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={board} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Math}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={square} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="Interactive with numbers."
                    />
                  </Card>
                </div>
              </Col>
            </Row>

            {/* ---------------- Music ---------------- */}
            <Divider orientation="left">Music</Divider>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={drum} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta title="Beat It" description="Druming with music." />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={cd} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={chalk} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="RockChalk!"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={painting} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="PaintingTool"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={artists} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="Art Board"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={drawing} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={board} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Music}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={square} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
            </Row>

            {/* ---------------- Sport ---------------- */}
            <Divider orientation="left">Sport</Divider>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={boat} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="RiverBoat"
                      description="Let's rowing with your loved one on peaceful lake."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card hoverable cover={<img alt="example" src={football} />}>
                    <Meta
                      title="FootballPlayer"
                      description="This is a football game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card hoverable cover={<img alt="example" src={badminton} />}>
                    <Meta
                      title="Badminton"
                      description="This is a badminton game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={painting} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="PaintingTool"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={artists} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="Art Board"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={drawing} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={board} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style_Sport}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={square} />}
                    onClick={() => gotoDrawing()}
                  >
                    <Meta
                      title="MasterPiece"
                      description="This is a drawing game."
                    />
                  </Card>
                </div>
              </Col>
            </Row>
          </Tabs.TabPane>

          {/* ************* Tab2 ************** */}
          <Tabs.TabPane tab="My Session" key="2">
            <PageHeader
              style={{
                border: '1px solid rgb(235, 237, 240)',
              }}
              // onBack={() => null}
              title="Session"
              subTitle="Choose a Session below to personalize a sequence of activities."
            />

            <Content>
              <div className="dottedBorder">
                {' '}
                Create a new session by adding activities
                <div className="dottedBorderButton">
                  <Button type="primary">+ New Session</Button>
                </div>
              </div>

              {/* ~~~~~~~~~~~ Session One ~~~~~~~~~~~~ */}
              <h3 className="subTitle">Suggestions from experts</h3>
              <div className="sessionOne">
                {/* My 1st Game */}
                <p className="sessionTitle">My 1st Game</p>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" span={6}>
                    <div style={style_Art}>
                      <Card
                        hoverable
                        cover={<img alt="example" src={drawing} />}
                      >
                        <Meta title="MasterPiece" description="Art." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style_Math}>
                      <Card hoverable cover={<img alt="example" src={math} />}>
                        <Meta title="NumberMatch" description="Math." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style_Art}>
                      <Card
                        hoverable
                        cover={<img alt="example" src={colorPad} />}
                      >
                        <Meta title="Color Matching" description="Art." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style_Music}>
                      <Card hoverable cover={<img alt="example" src={drum} />}>
                        <Meta title="Beat It" description="Music." />
                      </Card>
                    </div>
                  </Col>
                </Row>
                <div className="playBtn">
                  <Button type="primary"> Play </Button>
                </div>
              </div>

              {/* ~~~~~~~~~ session 2 ~~~~~~~~~ */}
              <div className="sessionTwo">
                <p className="sessionTitle">Beginner Friendly</p>
                <Row gutter={[3, 18]}>
                  <Col className="gutter-row" span={4}>
                    <div style={style_Math}>
                      <Card hoverable cover={<img alt="example" src={math} />}>
                        <Meta title="NumberMatch" description="Math." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div style={style_Music}>
                      <Card hoverable cover={<img alt="example" src={drum} />}>
                        <Meta title="Beat It" description="Music." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div style={style_Music}>
                      <Card hoverable cover={<img alt="example" src={cd} />}>
                        <Meta title="Color Matching" description="Music." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div style={style_Sport}>
                      <Card
                        hoverable
                        cover={<img alt="example" src={football} />}
                      >
                        <Meta title="FootballPlayer" description="Sport." />
                      </Card>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div style={style_Sport}>
                      <Card
                        hoverable
                        cover={<img alt="example" src={badminton} />}
                      >
                        <Meta title="Badminton" description="Sport." />
                      </Card>
                    </div>
                  </Col>
                </Row>
                <div className="playBtn">
                  <Button type="primary"> Play </Button>
                </div>
              </div>
            </Content>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Profile" key="3"></Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
};

export default ActivityList;
