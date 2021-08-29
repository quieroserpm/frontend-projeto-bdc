import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalStyle from './styles/global';
import { Header, Container, Content } from './styles';


const FormInput = styled.input`
//border: 1px dashed #8B0000;
border: 1px dashed #ddd;
border-radius: 4px;
margin: .5rem 0;
`;

const Button = styled.button`
//border: 1px dashed #8B0000;
border: 1px dashed #ddd;
border-radius: 4px;
color: #999;
justify-content: center;
align-items: center;
padding: 5px 10px;
//background:linear-gradient(to right, #F07797 50%, #8B0000 50%);
//background-size: 200% 100%;
//background-position: right bottom;
//color: #FFF7F3;
font-weight: 700;
cursor: pointer;
//transition: all 300ms ease-out;
`;

const ErrorSpan = styled.span`
  color: #e57878;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;

const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, logradouro: address.data.logradouro, bairro: address.data.bairro,
      localidade: address.data.localidade, uf: address.data.uf });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:5000/register', form);
      if (user.status === 200) {
        alert('Cadastro realizado!');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    name: '',
    cargo:'',
    datanas:'',
    estadoc:'',
    gender: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    localidade: '',
    uf: '',
    email: '',
    identidade: '',
    cpf: '',
    vehiculo: '',
    habilitacao: '',
  });

  const [cpfError, setCpfError] = useState(false);

    return    (
    
    <Header>
      <div>
        <h1>Banco de Currículos | JobsNET</h1>
        <h3>Especialistas em recrutamento e seleção de profissionais.</h3>
      </div>

    <Container>
      <Content>
      <h2>DADOS PESSOAIS </h2>
      <hr />
       
      <div>
        <label>Nome completo:* </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></FormInput>
      </div>
      <div>
        <label>Cargo pretendido: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo}></FormInput>
      </div>
      <div>
        <label>Data de nascimento:* </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, datanas: e.target.value });
        }} value={form.datanas}></FormInput>
      </div>
      <div>
        <label>Estado civil: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, estadoc: e.target.value });
        }} value={form.estadoc}></FormInput>
      </div>
      <div>
        <label>Gênero: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, gender: e.target.value });
        }} value={form.gender}></FormInput>
      </div>
      <div>
        <label>CEP:* </label>
        <FormInput onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
      </div>
      <div>
        <label>Endereço:* </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, logradouro: e.target.value });
        }} value={form.logradouro}></FormInput>
      </div>
      <div>
        <label>Número: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, numero: e.target.value });
        }} value={form.numero}></FormInput>
      </div>
      <div>
        <label>Bairro: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro}></FormInput>
      </div>
      <div>
        <label>Cidade:* </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, localidade: e.target.value });
        }} value={form.localidade}></FormInput>
      </div>
      <div>
        <label>Estado: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, uf: e.target.value });
        }} value={form.uf}></FormInput>
      </div>      
      <div>
        <label>Email: *</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
        <ErrorSpan isError={cpfError}>Erro! Email já cadastrado!</ErrorSpan>
      </div>
      <h2>DOCUMENTOS </h2>
      <hr />
      <div>
        <label>Identidade:* </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, identidade: e.target.value });
        }} value={form.identidade}></FormInput>
      </div>
      <div>
        <label>CPF:* </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>Erro! CPF já cadastrado!</ErrorSpan>
      </div>
      <div>
        <label>Possui vehículo: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, vehiculo: e.target.value });
        }} value={form.vehiculo}></FormInput>
      </div>  
      <div>
        <label>Habilitação: </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, habilitacao: e.target.value });
        }} value={form.habilitacao}></FormInput>
      </div>

      <Button onClick={() => createCandidate()}>Enviar!</Button>
      </Content>
      <GlobalStyle/>
    </Container>
    </Header>

  );
};

export default App;