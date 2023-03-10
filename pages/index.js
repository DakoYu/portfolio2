import { Layout, Menu, Col, Row, Space, Typography, Image, Button, Card, Avatar, Affix, Grid, Tooltip } from 'antd'
import { TwitterOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, LinkOutlined } from '@ant-design/icons';
import axios from 'axios'
import fileDownload from 'js-file-download'
import Head from 'next/head'

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography
const { Meta } = Card
const { useBreakpoint } = Grid


export default function Home() {
  const screen = useBreakpoint()
  
  const menuItems = [
    {
      key: 'about',
      label: 'ABOUT'
    },
    {
      key: 'portfolio',
      label: 'PORTFOLIO'
    },
    {
      key: 'contact',
      label: 'CONTACT'
    }
  ]
  
  const openLink = (link) => {
    window.open(link)
  }

  const buttonScroll = ({ key }) => {
    const element = document.getElementById(key)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownload = async() => {
    const res = await axios.get('https://dl.dropboxusercontent.com/s/8o3ro61dq5fkw5t/Dako.pdf?dl=0', {
      responseType: 'blob'
    })

    fileDownload(res.data, 'Dako.pdf')
  }


  return (
    <>
      <Head>
        <title>Dako Yu</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout className='layout' theme='light'>
        <Affix offsetTop={0}>
          <Header 
            style={{ 
              textAlign: 'center',
              background: '#F8F9FE' 
            }}
          >
            <Menu 
              theme='light'
              mode='horizontal'
              items={menuItems}
              onClick={buttonScroll}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#F8F9FE' 
              }}
            />
          </Header>
        </Affix>

        <Content>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(175deg, rgba(248,249,254,1) 35%, rgba(223,227,250,1) 52%, rgba(148,159,238,1) 100%)'
            }}
          >
            <Space
              size='large'
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Paragraph 
                  level={5} 
                  style={{ 
                    color: '#949FEE', 
                    margin: '10px 0 0 0'
                  }}
                >
                  Hi there!
                </Paragraph>

                <Title style={{ fontWeight: 'bold', }}>Dako Yu</Title>

                <Paragraph level={4} style={{ color: '#4D61E0', fontWeight: 'bold' }}>Full Stack Developer</Paragraph>

                <Paragraph level={5} style={{ color: '#B6B6B6' }}>{"Let's Build a brighter future with coding"}</Paragraph>


                <Button
                  onClick={handleDownload}
                  style={{
                    background: '#4D61E0',
                    color: '#fff',
                    margin: '20px 0'
                  }}
                >
                  DOWNLOAD RESUME
                </Button>

                <Space
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <Button onClick={() => openLink('https://www.linkedin.com/in/dako-yu/')} icon={<LinkedinOutlined />}>LinkedIn</Button>
                  <Button onClick={() => openLink('https://github.com/DakoYu')} icon={<GithubOutlined />}>GitHub</Button>
                  <Button onClick={() => openLink('https://twitter.com/Dakotec3')} icon={<TwitterOutlined />}>Twitter</Button>
                </Space>

              </div>

              {
                (screen.lg) && 
                <Image
                  width='500px'
                  alt='coding'
                  src='/coding.svg'
                  preview={false}
                />
              }
            </Space>
          </div>

          <div
            id='about'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(354deg, rgba(255,255,255,1) 35%, rgba(212,217,238,1) 100%)'
          }}
          >
            <Space
              direction='vertical'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Paragraph level={5} style={{ color: '#949FEE', fontWeight: 'bold', marginTop: '80px' }}>ABOUT</Paragraph>
              <Title level={3} style={{ margin: 0, textAlign: 'center'}}>
                {"I'm Full Stack Developer and interested in"}
              </Title>
              <Title level={3} style={{ margin: '0 0 40px 0'}}> 
                Automation and Scripting
              </Title>
            </Space>
            
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='center' style={{ display: 'flex', marginLeft: 0, marginRight: 0 }}>
              <Col lg={8}>
                <Card
                  hoverable
                  cover={<img alt='frontend' src='/next.webp'/>}
                  bordered={false}
                  style={{
                    width: 250,
                  }}
                >
                  <Meta 
                    title='Frontend' 
                    description='React is my favrorite Javascript library for creating client page. I use Next.js framework for quick setup of routes. Ant Deisgn and Matierial UI are great UI framework to style the page!'
                  />
                </Card>
              </Col>

              <Col lg={8}>
                <Card
                  hoverable
                  cover={<img alt='backend' src='/python.png'/>}
                  bordered={false}
                  style={{
                    width: 250,
                  }}
                >
                  <Meta 
                    title='Backend' 
                    description='Django and Flask are great framework to create a server with Python. Express.js is another great framework with Javascript. Postgresql and MongoDB are my favrotite databse!'
                  />
                </Card>
              </Col>

              <Col lg={8}>
                <Card
                  hoverable
                  cover={<img alt='automation' src='/discord.webp'/>}
                  bordered={false}
                  style={{
                    width: 250,
                  }}
                >
                  <Meta title='Scripting' description='I am a big fan of using codes to automate my works! Tools that I love to work with are pandas, requests, discord bot, selenium. '/>
                </Card>
              </Col>
            </Row>
          </div>

          <div
            id='portfolio'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(173deg, rgba(255,255,255,1) 35%, rgba(212,217,238,1) 100%)',
              background: '#fff',
              backgroundImage: 'url(/wave2.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              paddingBottom: '40px'
            }}
          >
            <Paragraph level={5} style={{ color: '#949FEE', fontWeight: 'bold', marginTop: '40px' }}>PORTFOLIO</Paragraph>
            <Title level={3} style={{ margin: '0 0 40px 0' }}>
              My recent projects
            </Title>

            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='center' style={{ display: 'flex', marginLeft: 0, marginRight: 0 }}>
              <Col lg={8}>
                <Card
                  hoverable
                  cover={<img src='/game.png'/>}
                  bordered={false}
                  style={{
                    width: 250,
                  }}
                  actions={[
                    <Tooltip key='link' placement='top' title='Live Demo'>
                      <LinkOutlined onClick={() => openLink('https://game-frontend-xi.vercel.app/')}/>
                    </Tooltip>,
                    <Tooltip key='github' placement='top' title='Frontend'>
                      <GithubOutlined  
                        onClick={() => openLink('https://github.com/DakoYu/game-frontend')}
                      />
                    </Tooltip>,
                    <Tooltip key='github' placement='top' title='Backend'>
                      <GithubOutlined  
                        onClick={() => openLink('https://github.com/DakoYu/game-backend')}
                      />
                    </Tooltip>
                  ]}
                >
                  <Meta 
                    avatar={<Avatar alt='game' src='ff14.png'/>}
                    title='Game Collection' 
                    description='The website would allow users to add their favorite games to their account!'
                  />
                </Card>
              </Col>

              <Col lg={8}>
                <Card
                  hoverable
                  cover={<img alt='gundam' src='/gundam.png'/>}
                  bordered={false}
                  actions={[
                    <Tooltip key='link' placement='top' title='Live Demo'>
                      <LinkOutlined onClick={() => openLink('https://gundam-client.vercel.app/')} />
                    </Tooltip>,
                    <Tooltip key='github' placement='top' title='Frontend'>
                      <GithubOutlined onClick={() => openLink('https://github.com/DakoYu/Gundam-Backend')}/>
                    </Tooltip>,
                    <Tooltip key='github' placement='top' title='Backend'>
                      <GithubOutlined 
                        onClick={() => openLink('https://github.com/DakoYu/Gundam-Backend')}
                      />
                    </Tooltip>,
                  ]}
                  style={{
                    width: 250,
                  }}
                >
                  <Meta 
                    avatar={<Avatar alt='gunpla' src='gunpla.jpeg'/>}
                    title='Gunpla Showcase' 
                    description='I built a website to showcase my recent gunpla built kits and other kits. Gunpla is my favorite hobby since I was a kid!'
                  />
                </Card>
              </Col>

              <Col lg={8}>
                <Card
                  hoverable
                  cover={<img alt='cineplex' src='/cineplex.jpg'/>}
                  bordered={false}
                  actions={[
                    <Tooltip key='link' placement='top' title='Invite Link'>
                      <LinkOutlined onClick={() => {openLink('https://discord.com/api/oauth2/authorize?client_id=1062749573824647260&permissions=8&scope=bot')}}/>
                    </Tooltip>,
                    <Tooltip key='github' placement='top' title='Discord Bot'>
                      <GithubOutlined onClick={() => openLink('https://github.com/DakoYu/Cineplex-Discord-Bot')}/>
                    </Tooltip>
                  ]}
                  style={{
                    width: 250,
                  }}
                >
                  <Meta 
                    avatar={<Avatar alt='cineplex bot' src='cineplex_icon.png'/>}
                    title='Cineplex Discord' 
                    description='A discord bot that displays the newests and future release movies. The bot can also track English and French movies!'
                  />
                </Card>
              </Col>
            </Row>
          </div>

          
          <div
            id='contact'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#F8F9FE',
            }}
          >
            <Paragraph level={5} style={{ color: '#949FEE', fontWeight: 'bold', marginTop: '40px' }}>CONTACT</Paragraph>

            <Title level={3} style={{ margin: '0 0 40px 0' }}>{"Let's get in touch with"}</Title>

            <Space>
              <Button onClick={() => openLink('https://www.linkedin.com/in/dako-yu/')} icon={<LinkedinOutlined />}>LinkedIn</Button>
              <Button onClick={() => openLink('https://twitter.com/Dakotec3')} icon={<TwitterOutlined />}>Twitter</Button>
              <Button onClick={() => window.location = 'mailto:daniel355866@hotmail.com'} icon={<MailOutlined />}>Email</Button>
            </Space>
          </div>
          
        </Content>

        <Footer style={{ background: '#F8F9FE' }}>
          <Paragraph>Copyright ?? 2023 Dako Yu. All rights reserved.</Paragraph>
        </Footer>
      </Layout>
    </>
  )
}
