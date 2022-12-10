import { useAuth } from "../../context/AuthProvider/useAuth";
import { Affix, Col, Row, Menu, Layout, MenuProps, Input, Space, Button, Divider, notification,  Card, 
  Table, Tag, 
  Select,  Checkbox,
   DatePicker, AutoComplete, } from 'antd';
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
  BellOutlined, AppstoreOutlined,  MenuOutlined, PoweroffOutlined,
  ArrowDownOutlined, ArrowUpOutlined,
  AudioOutlined, PlusOutlined,
} from '@ant-design/icons';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import { NavLink, Navigate } from "react-router-dom";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import "../../assets/css/styles.css";
import "../../assets/css/reset.css";
import { Footer } from "antd/lib/layout/layout";
import type { NotificationPlacement } from 'antd/es/notification';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { MenuItem } from "rc-menu";

type MenuItem = Required<MenuProps>['items'][number];
interface DataType {
  key: React.Key;
  DataInicial: string;
  Operadora: string;
  Contrato: string;
  Emrpesa: string;
  NSU: string;
}


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

export const VENDAS_POR_CONTRATO = ({ children }: { children: JSX.Element }) => {
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
  

     /*inicio tabela*/
     const { Column, ColumnGroup } = Table;

     const data: DataType[] = [
         {
             key: '1',
             DataInicial: '',
             Operadora: '',
             Contrato: '',
             Emrpesa: '',
             NSU: '',
         },
     ];
 
 
 
     /*fim tabela*/
 
     /*inicio select*/
 
     const { Option, OptGroup } = Select;
 
     const handleChange = (value: string) => {
         console.log(`selected ${value}`);
     };
     /*FIM select*/
 
     /*inicio caixa de texto NSU*/
     const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
 
     const handleSearch = (value: string) => {
         let res: { value: string; label: string }[] = [];
         if (!value || value.indexOf('@') >= 0) {
             res = [];
         } else {
             res = ['gmail.com', '163.com', 'qq.com'].map(domain => ({
                 value,
                 label: `${value}@${domain}`,
             }));
         }
         setOptions(res);
     };
 
     /*Fim caixa de texto NSU*/
 
     /*inicio Data*/
 
     const { RangePicker } = DatePicker;
 
     /*FIM Data*/
 
 
     /*inicio checkbox*/
     const onChange = (checkedValues: CheckboxValueType[]) => {
         console.log('checked = ', checkedValues);
     };
 
     const plainOptions3 = ['Data', 'Cartão', 'Empresa', 'Bandeira', 'NSU', 'Num.Par', 'Par.Conc', 'Status'];
     const optionsWithDisabled3 = [
         { label: 'Data', value: 'Data' },
         { label: 'Cartão', value: 'Cartão' },
         { label: 'Empresa', value: 'Empresa' },
         { label: 'Bandeira', value: 'Bandeira' },
         { label: 'NSU', value: 'NSU' },
         { label: 'Num.Par', value: 'Num.Par' },
         { label: 'Par.Conc', value: 'Par.Conc' },
         { label: 'Status', value: 'Status', disabled: false },
     ];
 
 
     /*fim checkbox*/
 
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
  
          <Content style={{ background: '#fff' }}>


                        <Card >
                            <div>

                                <Table pagination={false} dataSource={data}>

                                    

                                        <Column
                                            title="Data Inicial - Data Final"
                                            dataIndex="DataInicial"
                                            key="DataInicial"
                                            render={(_: any, record: DataType) => (
                                                <Space direction="vertical" size={12} style={{ width: 216 }}>
                                                    <RangePicker />
                                                </Space>
                                            )}
                                        />
                                </Table>

                                <div style={{ margin: 0, padding: 0,}}>
                                    <Table pagination={false} dataSource={data}>

                                        <Column title="Operadora"
                                            dataIndex="Operadora"
                                            key="Operadora"
                                            render={(_: any, record: DataType) => (
                                                <Space size="middle">
                                                    <Select defaultValue="Selecione" style={{ width: 200 }} onChange={handleChange}>

                                                        <Option value="Saque"> </Option>
                                                        <Option value="Fluxo"> </Option>

                                                    </Select>
                                                </Space>
                                            )}
                                        />

                                        <Column title="Contrato"
                                            dataIndex="Contrato"
                                            key="Contrato"
                                            render={(_: any, record: DataType) => (
                                                <Space size="middle">
                                                    <Select defaultValue="Selecione" style={{ width: 200 }} onChange={handleChange}>

                                                        <Option value="Saque"> </Option>
                                                        <Option value="Fluxo"> </Option>

                                                    </Select>
                                                </Space>
                                            )}
                                        />

                                        <Column
                                            title="Empresa"
                                            dataIndex="EMPRESA"
                                            key="EMPRESA"
                                            render={(_: any, record: DataType) => (
                                                <Space size="middle">
                                                    <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>
                                                        <OptGroup label="Manager">
                                                            <Option value="jack">102-TACARUNA - 08165268000438</Option>
                                                            <Option value="lucy">103-PLAZA - 08165268000519</Option>
                                                            <Option value="lucy">105-MIDWAY - 08165268000942</Option>
                                                            <Option value="lucy">110- BARRA - 08165268001167</Option>
                                                            <Option value="lucy">111-RIOMAR - 08165268001086</Option>
                                                            <Option value="lucy">106-JARDINS - 07911729000169</Option>
                                                            <Option value="lucy">107-SALVADOR - 08612911000181</Option>
                                                            <Option value="lucy">108-SALVADOR NORTE - 08612911000262</Option>
                                                            <Option value="lucy">109-GUARARAPES - 02358243000121</Option>
                                                            <Option value="lucy">001-FABRICA - 08165268000195</Option>
                                                            <Option value="lucy">114 - RIOMAR ARACAJU - 07911729000240</Option>
                                                            <Option value="lucy">104-MANÃIRA - 08165268000780</Option>
                                                            <Option value="lucy">101 - RECIFE - 08165268000861</Option>
                                                            <Option value="lucy">112- RECIFE OFF - 02358243000202</Option>
                                                        </OptGroup>
                                                    </Select>
                                                </Space>
                                            )}
                                        />

                                </Table>


                                    <Table  pagination={false} dataSource={data} style={{ background: '#fff'}}>

                                        
                                            <Column 
                                                title="Agrupar por:"
                                                dataIndex="Agrupar"
                                                key="Agrupar"
                                                render={(_: any, record: DataType) => (
                                                    <Space size="middle">
                                                        <Checkbox.Group options={plainOptions3} defaultValue={['Data']} onChange={onChange} />
                                                    </Space>
                                                )}
                                            />
                                         
                                       
                                    </Table>
                                </div>

                            </div>

                            <div>
                                <Button type="primary">
                                    <a>Filtrar Dados</a>
                                </Button>
                            </div>
                        </Card>

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
  