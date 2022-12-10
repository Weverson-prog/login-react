import { Button } from 'reactstrap'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { CARTAO } from './components/Cartão'
import { MARKETPLACE } from './components/Marketplace'
import { ADMINISTRADOR } from './components/Administrador'
import { REDEFINIR_SENHA } from './components/Redefinir_Senha'
import { CONCILIACAO } from './components/Conciliação'
import { CONFIG_OPERADORAS } from './components/Config_Operadoras'
import { USUARIOS } from './components/Usuarios'
import { TAXAS } from './components/Taxas'
import { CONTRATOS } from './components/Contratos'
import { TERMINAIS } from './components/Terminais'
import { EMPRESAS } from './components/Empresas'
import { VENDAS_POR_FILIAL } from './components/Vendas_Por_Filial'
import { VENDAS_POR_CONTRATO } from './components/Vendas_Por_Contrato'
import { VENDAS_NAO_EXPOR } from './components/Vendas_Não_Expor'
import { VENDAS_CANCELADAS } from './components/Vendas_Canceladas'
import { SAQUE } from './components/Saque'
import { RECEBIVEIS } from './components/Recebiveis'
import { CALENDARIO_DE_RECEBIMENTO } from './components/Calendario_De_Recebimentos'
import { BAIXAS_NSU } from './components/Baixas_Nsu'
import { CREDITO_EM_CONTA } from './components/Credito_Em_Conta'
import { TAXAS_ADMINISTRATIVAS } from './components/Taxas_Administrativas'
import { ANTECIPACOES } from './components/Antecipações'
import { DASHBOARD } from './components/Dashboard'
import { UPLOAD_DE_ARQUIVOS } from './components/Upload_De_Arquivos'
import { MENSAGENS } from './components/Mensagens'
import { EXCLUIR_CONCILIADOS } from './components/Excluir_Conciliados'
import { VENDAS_POR_MES } from './components/Venas_Por_Mes'
import { RECEBIMENTOS_BANDEIRAS } from './components/Recebimentos_Bandeiras'
import { INCLUSAO_DE_AJUSTE } from './components/INCLUSAO_DE_AJUSTE'
import { BAIXA_TITULOS_RECEBER } from './components/BAIXA_TITULOS_RECEBER'
import { INCLUSAO_DE_TITULOS } from './components/INCLUSAO_DE_TITULOS'





function App(props: any) {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
              <Route path='/Home' element={<Home><h1></h1></Home>} />

              <Route path='/CARTAO' element={<CARTAO><h1>1</h1></CARTAO>} />

              <Route path='/MARKETPLACE' element={<MARKETPLACE><h1>2</h1></MARKETPLACE>} />

              <Route path='/ADMINISTRADOR' element={<ADMINISTRADOR><h1></h1></ADMINISTRADOR>} />

              <Route path='/REDEFINIR_SENHA' element={<REDEFINIR_SENHA><h1>4</h1></REDEFINIR_SENHA>} />

              <Route path='/CONCILIACAO' element={<CONCILIACAO><h1>5</h1></CONCILIACAO>} />

              <Route path='/CONFIG_OPERADORAS' element={<CONFIG_OPERADORAS><h1>6</h1></CONFIG_OPERADORAS>} />

              <Route path='/USUARIOS' element={<USUARIOS><h1>7</h1></USUARIOS>} />

              <Route path='/TAXAS' element={<TAXAS><h1>8</h1></TAXAS>} />

              <Route path='/CONTRATOS' element={<CONTRATOS><h1>9</h1></CONTRATOS>} />

              <Route path='/TERMINAIS' element={<TERMINAIS><h1>10</h1></TERMINAIS>} />

              <Route path='/EMPRESAS' element={<EMPRESAS><h1>11</h1></EMPRESAS>} />

              <Route path='/VENDAS_POR_FILIAL' element={<VENDAS_POR_FILIAL><h1>12</h1></VENDAS_POR_FILIAL>} />

              <Route path='/VENDAS_POR_CONTRATO' element={<VENDAS_POR_CONTRATO><h1>13</h1></VENDAS_POR_CONTRATO>} />

              <Route path='/VENDAS_NAO_EXPOR' element={<VENDAS_NAO_EXPOR><h1>14</h1></VENDAS_NAO_EXPOR>} />

              <Route path='/VENDAS_CANCELADAS' element={<VENDAS_CANCELADAS><h1>15</h1></VENDAS_CANCELADAS>} />

              <Route path='/SAQUE' element={<SAQUE><h1>16</h1></SAQUE>} />

              <Route path='/RECEBIVEIS' element={<RECEBIVEIS><h1>17</h1></RECEBIVEIS>} />

              <Route path='/CALENDARIO_DE_RECEBIMENTO' element={<CALENDARIO_DE_RECEBIMENTO><h1>18</h1></CALENDARIO_DE_RECEBIMENTO>} />

              <Route path='/BAIXAS_NSU' element={<BAIXAS_NSU><h1>19</h1></BAIXAS_NSU>} />

              <Route path='/CREDITO_EM_CONTA' element={<CREDITO_EM_CONTA><h1>20</h1></CREDITO_EM_CONTA>} />

              <Route path='/TAXAS_ADMINISTRATIVAS' element={<TAXAS_ADMINISTRATIVAS><h1>21</h1></TAXAS_ADMINISTRATIVAS>} />

              <Route path='/RECEBIMENTOS_BANDEIRAS' element={<RECEBIMENTOS_BANDEIRAS><h1>22</h1></RECEBIMENTOS_BANDEIRAS>} />

              <Route path='/ANTECIPACOES' element={<ANTECIPACOES><h1>23</h1></ANTECIPACOES>} />

              <Route path='/DASHBOARD' element={<DASHBOARD><h1>24</h1></DASHBOARD>} />

              <Route path='/UPLOAD_DE_ARQUIVOS' element={<UPLOAD_DE_ARQUIVOS><h1>26</h1></UPLOAD_DE_ARQUIVOS>} />

              <Route path='/MENSAGENS' element={<MENSAGENS><h1>27</h1></MENSAGENS>} />

              <Route path='/EXCLUIR_CONCILIADOS' element={<EXCLUIR_CONCILIADOS><h1>28</h1></EXCLUIR_CONCILIADOS>} />

              <Route path='/INCLUSAO_DE_AJUSTE' element={<INCLUSAO_DE_AJUSTE><h1>29</h1></INCLUSAO_DE_AJUSTE>} />

              <Route path='/BAIXA_TITULOS_RECEBER' element={<BAIXA_TITULOS_RECEBER><h1>29</h1></BAIXA_TITULOS_RECEBER>} />

              <Route path='/INCLUSAO_DE_TITULOS' element={<INCLUSAO_DE_TITULOS><h1>29</h1></INCLUSAO_DE_TITULOS>} />

              <Route path='/VENDAS_POR_MES' element={<VENDAS_POR_MES><h1>29</h1></VENDAS_POR_MES>} />

              <Route path='/profile' element={<ProtectedLayout><h1>OLÁ BEM VINDO AO PROFILE</h1></ProtectedLayout>} />


              <Route path='/login' element={<Login />} />

              
              
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}


export default App
