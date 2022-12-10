import { useAuth } from "../../context/AuthProvider/useAuth";
import {InputNumber, Radio,  Space, Table, Tag, Card, Checkbox, Select, Affix, Col, Row, Menu, Layout, MenuProps, Input,  Button, notification, DatePicker,  } from 'antd';
import type { DatePickerProps } from 'antd';
import React, { useState } from 'react';
import {
  LogoutOutlined,
  MailOutlined,
  SettingOutlined,
  CloudServerOutlined,
  BankOutlined,
  DollarCircleOutlined,
  FileSearchOutlined,
  RetweetOutlined,
  DashboardOutlined,
  HomeOutlined,
  BellOutlined,
  SearchOutlined,
  DeleteOutlined,
  SaveOutlined,
  PoweroffOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { NavLink, Navigate } from "react-router-dom";

import "../../assets/css/styles.css";
import "../../assets/css/reset.css";
import { Footer } from "antd/lib/layout/layout";
import type { NotificationPlacement } from 'antd/es/notification';
import { MenuItem } from "rc-menu";
import type { CheckboxChangeEvent } from 'antd/es/checkbox'; 



type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [


  getItem('MN PRÁTICO', 'sub1', null, [
    getItem('CARTAO', '1', <NavLink to="/cartao" style={{ marginLeft: '-25px' }}></NavLink>),
    getItem('MARKETPLACE', '2', <NavLink to="/marketplace" style={{ marginLeft: '-25px' }}></NavLink>),
  ]),

  getItem('BLUK', 'sub2', <MailOutlined />, [
    getItem('ADMINISTRADOR', '3', <NavLink to="/administrador" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('REDEFINIR SENHA', '4', <NavLink to="/redefinir_senha" style={{marginLeft: '-25px'}}></NavLink>),
  ]),

  getItem( 'HOME', null, <NavLink to="/home" style={{marginLeft: '0'}}> <HomeOutlined /></NavLink> ,
  ),

  getItem('CONCILIAÇÃO', null, <NavLink to="/conciliacao" style={{marginLeft: '0'}}> <RetweetOutlined /></NavLink> 
  ),

  getItem('CADASTROS', 'sub3', <FileSearchOutlined />, [
    getItem('CONFIG. OPERADORAS', '5', <NavLink to="/config_operadoras" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('USUÁRIOS', '6', <NavLink to="/usuarios" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('TAXAS', '7', <NavLink to="/taxas" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('CONTRATOS', '8', <NavLink to="/contratos" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('TERMINAIS', '9', <NavLink to="/terminais" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('EMPRESAS', '10', <NavLink to="/empresas" style={{marginLeft: '-25px'}}></NavLink>),

  ]),

  getItem('VENDAS', 'sub4', <DollarCircleOutlined />, [
    getItem('VENDAS POR FILIAL', '11', <NavLink to="/vendas_por_filial" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('VENDAS POR CONTRATO', '12', <NavLink to="/vendas_por_contrato" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('VENDAS NÃO EXPOR', '13', <NavLink to="/vendas_nao_expor" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('VENDAS CANCELADAS', '14', <NavLink to="/vendas_canceladas" style={{marginLeft: '-25px'}}></NavLink>),
  ]),

  getItem('RECEBIMENTOS', 'sub5', <BankOutlined />, [
    getItem('SAQUE', '15', <NavLink to="/saque" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('RECEBIVEIS', '16', <NavLink to="/recebiveis" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('CALENDÁRIO DE RECEBIMENTO', '17', <NavLink to="/calendario_de_recebimento" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('BAIXAS NSU', '18', <NavLink to="/baixas_nsu" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('CRÉDITO EM CONTA', '19', <NavLink to="/credito_em_conta" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('TAXAS ADMINISTRATIVAS', '20', <NavLink to="/taxas_administrativas" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('RECEBIMENTOS BANDEIRAS', '21', <NavLink to="/recebimentos_bandeiras" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('ANTECIPAÇÕES', '22', <NavLink to="/antecipacoes" style={{marginLeft: '-25px'}}></NavLink>),
  ]),

  getItem('DASHBOARD', null,  <NavLink to="/dashboard" style={{marginLeft: '0'}}> <DashboardOutlined /></NavLink>
  ),

  getItem('ERP', 'sub6', <CloudServerOutlined />, [
    getItem('INCLUSÃO DE AJUSTE', '23', <NavLink to="/inclusao_de_ajuste" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('BAIXA TÍTULOS RECEBER', '24', <NavLink to="/baixa_titulos_receber" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('INCLUSÃO DE TÍTULOS', '25', <NavLink to="/inclusao_de_titulos" style={{marginLeft: '-25px'}}></NavLink>),
  ]),

  getItem('OUTROS', 'sub7', <SettingOutlined />, [
    getItem('UPLOAD DE ARQUIVOS', '26', <NavLink to="/upload_de_arquivos" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('MENSAGENS', '27', <NavLink to="/mensagens" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('EXCLUIR CONCILIADOS', '28', <NavLink to="/excluir_conciliados" style={{marginLeft: '-25px'}}></NavLink>),
    getItem('VENDAS POR MÊS', '29', <NavLink to="/vendas_por_mes" style={{marginLeft: '-25px'}}></NavLink>),
  ]),

  getItem('LOGOUT', null,  <NavLink to="/login" style={{marginLeft: '0',
marginBottom: '7px'}}> <LogoutOutlined /></NavLink>
  ),
]

export const BAIXA_TITULOS_RECEBER = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth(); 

    const { Header, Sider, Content } = Layout;

    const openNotification = (placement: NotificationPlacement) => {
      notification.info({
        message: `Notificação `,
        description:
          'Sua notificação personalizada aqui!!!',
        placement,
      });
    };
    const [size, setSize] = useState<SizeType>('large');
  
    const [collapsed, setCollapsed] = useState(false);
  
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    const { Search } = Input;

    const { Column, ColumnGroup } = Table;

    const [loadings, setLoadings] = useState<boolean[]>([]);

    const onSearch = (value: string) => console.log(value);

    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const onChange = (e: CheckboxChangeEvent) => {
      console.log(`checked = ${e.target.checked}`);
    };
    const enterLoading = (index: number) => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
  
      setTimeout(() => {
        setLoadings(prevLoadings => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };

  
  interface DataType {
    key: React.Key;
    OPERADORA: string;
    STATUS: string;
    CONFIG_BAIXAS: number;
    INCLUSAO_DE_AJUSTES: string;
    EMPRESA: string[];
    
  }

  const data: DataType[] = [
    {
      key: '1',
      OPERADORA: '',
      STATUS: '',
      CONFIG_BAIXAS: 32,
      INCLUSAO_DE_AJUSTES: '',
      EMPRESA: ['nice', 'developer'],
    },
    
  ];

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

    return (
  
  
  
      <Layout style={{ minHeight: '100vh' }}>
  
  
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} style={{
          backgroundImage: 'linear-gradient( #fff, #fff )'
        }}>
  
          <div className="logo" style={{
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(" + "https://lh3.googleusercontent.com/pw/AL9nZEWUxTUNlLTWhP9d2dyoKpz6ZnF1EWfGTrmAPDeo5893BvPjV9kXY7V72ZmZ02VAGI2KZnrDiqErIjwLfYB8CO49IA_z9XukMOfW2shVEpUParcLjRtuDjgMqsN6oIBxlv7ctt-fkETdJEvRPZNcB2qV=w100-h71-no?authuser=0" + ")",
            display: 'flex',
            justifyContent: 'center'
  
          }} />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}
          />
  
        </Sider>
        <Layout className="site-layout">
  
          <Header className="site-layout-background" style={{
            display: 'block',
            background: '#1b71da',
            backgroundImage: 'linear-gradient(to left,#1b71da, #3c89e3, #3c89e3, #5da0ed, #7eb8f6, #7eb8f6, #9fcfff, #9fcfff, #9fcfff,  #fff)',
          }}>
  
            <Space>
              <Button className="notification-button"
                type="primary"
                shape="round"
                onClick={() => openNotification('bottomRight')}
                icon={<BellOutlined />}
                size={size}
                style={{}}
              >
  
              </Button>
            </Space>
            <Space>
            </Space>
  
          </Header>
  
          <Content
            className="site-layout-background"
            style={{
              backgroundImage: "url(" + "" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
            <article>
              <Card style={{  backgroundColor: '#f0f5ff', margin: '20px 24px 0', overflow: 'initial' }}>
              <div style={{ margin: '20px  0', }}>
              <Table pagination={false} dataSource={data}>
    
    <Column title="DATA"  dataIndex="DATA" key="DATA" render={(_: any, record: DataType) => (
      <Space size="middle">
          <DatePicker onChange={onChangeDate} />
      </Space> 
    )}
    /> 
    
    
    <Column title="OPERADORA"  dataIndex="OPERADORA" key="OPERADORA" render={(_: any, record: DataType) => (
      <Space size="large">
       <Select   
    defaultValue="Selecione"
    style={{ 
      width: 250 }}
    onChange={handleChange}
    options={[
      {
        value: 'null',
        label: 'Null',
      }
    ]}
  />
      </Space> 
    )}
    /> 
    <Column title="CONTRATO"  dataIndex="CONTRATO" key="CONTRATO" render={(_: any, record: DataType) => (
      <Space size="large">
      <Select   
   defaultValue="Selecione"
   style={{ 
     width: 250 }}
   onChange={handleChange}
   options={[
     {
       value: 'null',
       label: 'Null',
     }
   ]}
 />
     </Space> 
   )}
   /> 
    <Column title="BANDEIRA"  dataIndex="BANDEIRA" key="BANDEIRA" render={(_: any, record: DataType) => (
      <Space size="large">
      <Select   
   defaultValue="Selecione"
   style={{ 
     width: 250 }}
   onChange={handleChange}
   options={[
     {
       value: 'null',
       label: 'Null',
     }
   ]}
 />
     </Space> 
   )}
   /> 
    <Column title="CONTA"  dataIndex="CONTA" key="CONTA" render={(_: any, record: DataType) => (
      <Space size="large">
      <Select   
   defaultValue="Selecione"
   style={{ 
     width: 250 }}
   onChange={handleChange}
   options={[
     {
       value: 'null',
       label: 'Null',
     }
   ]}
 />
     </Space> 
   )}
   /> 
    <Column title="STATUS "  dataIndex="STATUS" key="STATUS" render={(_: any, record: DataType) => (
            <Space size="large">
            <Select   
         defaultValue="Selecione"
         style={{ 
           width: 250 }}
         onChange={handleChange}
         options={[
           {
             value: 'NAO_BAIXADOS',
             label: 'NÃO BAIXADOS',
           },
           {
             value: 'BAIXADOS',
             label: 'BAIXADOS',
           },
           {
            value: 'APTOS',
            label: 'APTOS',
          },
          {
            value: 'NAO_CONCILIADOS',
            label: 'NÃO CONCILIADOS',
          },
         ]}
       /> 
           </Space> 
         )}
         /> 
   
   </Table>    
   <br></br>   
    <Button type="primary" shape="round" icon={'Filtrar'} size={size} style={{width: 100}} />    
   <br></br>
   <br></br>
   <InputNumber prefix="R$" style={{ width: '20%' }} /> <Button type="primary" icon={<DownloadOutlined />} size={"small"} />

                </div>
                </Card>
              
            </article>
          </Content>
          <Footer style={{
            height: '15px',
            backgroundColor: '#add8e6',
            backgroundImage: 'linear-gradient(to right,#1b71da, #3c89e3, #3c89e3, #5da0ed, #7eb8f6, #7eb8f6, #9fcfff,#9fcfff)',
          }}>
            <Row>
              <Col flex="auto">
                <h3 style={{
                  color: '#000',
                  textAlign: 'right',
                  fontFamily: 'arial',
                  fontSize: '14px',
  
                }}>
                  ⓒPratico 2022
                </h3>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    )
  
  
  
  
    return children
  
  }
  