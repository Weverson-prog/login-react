import { useAuth } from "../../context/AuthProvider/useAuth";
import { Affix, Col, Row, Menu, Layout, MenuProps, Input, Space, Button, Divider, notification, Card, 
  Table, Tag,
  Select,  Checkbox,
  DatePicker, AutoComplete, UploadProps ,
  message, Upload } from 'antd';
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
  AudioOutlined, PlusOutlined, UploadOutlined,
} from '@ant-design/icons';

import { NavLink, Navigate } from "react-router-dom";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import "../../assets/css/styles.css";
import "../../assets/css/reset.css";
import { Footer } from "antd/lib/layout/layout";
import type { NotificationPlacement } from 'antd/es/notification';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { MenuItem } from "rc-menu";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';


type MenuItem = Required<MenuProps>['items'][number];

interface DataType1 {
  key: React.Key;
  Upload: string;
  Operadora: string;
  Campo: string;
}

interface DataType {
  key: React.Key;
  NomeArquivo: string;
  Marketplace: string;
  Download: string;
  Acoes: string;
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

export const UPLOAD_DE_ARQUIVOS = ({ children }: { children: JSX.Element }) => {
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

    const data1: DataType1[] = [
        {
            key: '7',
            Upload: ' ',
            Operadora: ' ',
            Campo: ' ',
        },

    ];


    const data: DataType[] = [
        {
            key: '1',
            NomeArquivo: ' ',
            Marketplace: ' ',
            Download: ' ',
            Acoes: ' ',
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


    /*inicio upload*/

    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    /*fim upload*/




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
                            <h1 style={{ fontSize: '30px', fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif', color: '#000' }} >Upload de Arquivos da Operadora</h1>

                            <div style={{ margin: 0, padding: 0, }}>
                                <Table pagination={false} dataSource={data1}>

                                    <Column title="Selecione os arquivos para upload:"
                                        dataIndex="Upload"
                                        key="Upload"
                                        render={(_: any, record: DataType1) => (
                                            <Space size="middle">
                                                <Upload {...props}>
                                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                </Upload>
                                            </Space>
                                        )}
                                    />

                                    <Column title="Operadora/ Marketplace"
                                        dataIndex="Operadora"
                                        key="Operadora"
                                        render={(_: any, record: DataType1) => (
                                            <Space size="middle">
                                                <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>

                                                    <Option value="Campo1"> </Option>
                                                    <Option value="Campo2"> </Option>

                                                </Select>
                                            </Space>
                                        )}
                                    />

                                    <Column
                                        title=" "
                                        dataIndex="Campo"
                                        key="Campo"
                                        render={(_: any, record: DataType1) => (
                                            <Space size="middle">
                                                <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>
                                                    <OptGroup label="Opções">
                                                        <Option value="Esperando">Esperando</Option>
                                                        <Option value="Processando">Processando</Option>
                                                        <Option value="Importado">Importado</Option>
                                                        <Option value="Erro">Erro</Option>
                                                    </OptGroup>
                                                </Select>
                                            </Space>
                                        )}
                                    />
                                    <Column
                                        title=" "
                                        key="action"
                                        render={(_: any, record: DataType1) => (
                                            <Space size="middle">
                                                <Button type="primary">
                                                    <a>Enviar Arquivos</a>
                                                </Button>
                                            </Space>
                                        )}
                                    />
                                </Table>
                            </div>
                            <div>
                                <Table style={{ marginTop: '20px',}} dataSource={data}>
                                    
                                        <Column title="Nome Arquivo" dataIndex="NomeArquivo" key="NomeArquivo" />
                                        <Column title="Marketplace" dataIndex="Marketplace" key="Marketplace" />
                                        <Column title="Download" dataIndex="Download" key="Download" />
                                        <Column title="Ações" dataIndex="Acoes" key="Acoes" />
                                </Table>
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
  