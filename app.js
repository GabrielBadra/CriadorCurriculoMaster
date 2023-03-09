   //botões Etc...
   const Proximo = document.getElementById("Proximo")
   const PerfilProfissional=document.getElementById("PerfilProfissional")
   const DocumentosPessoais = document.getElementById("DocumentosPessoais")
   const Voltar = document.getElementById("Voltar")
   const SemExperiencia = document.getElementById("SemExperiencia")
   const SemCurso = document.getElementById("SemCurso")
   const Finalizar = document.getElementById("Finalizar")
   const SectionValores = document.getElementById("SectionValores")
   const LimpaObj = document.getElementById("LimpaObj")
   const LimpaCurso = document.getElementById("LimpaCurso")
   const LimpaExpe = document.getElementById("LimpaExpe")
   //Documentos Pessoais
   const nome = document.getElementById("Nome")
   const DataNascimento = document.getElementById("DataNascimento")
   const logradouro = document.getElementById("logradouro")
   const NumeroCasa = document.getElementById("NumeroCasa")
   const bairro = document.getElementById("bairro")
   const localidade = document.getElementById("localidade")
   const cep = document.getElementById("cep")
   const NumeroCelular=document.getElementById("NumeroCelular")
   const Email = document.getElementById("Email")
   //Perfil Profissional
   const Objetivo = document.getElementById("Objetivo")
   const Escolaridade = document.getElementById("Escolaridade")
   const Curso = document.getElementById("Curso")
   const Empresa = document.getElementById("Empresa")
   const Cargo = document.getElementById("Cargo")
   const Periodo = document.getElementById("Periodo")
   //Parte do Curriculo
   const NomeValores = document.getElementById("NomeValores")
   const DataValores = document.getElementById("DataValores")
   const EnderecoValores = document.getElementById("EnderecoValores")
   const BairroValores = document.getElementById("BairroValores")
   const CidadeValores = document.getElementById("CidadeValores")
   const CepValores = document.getElementById("CepValores")
   const CelularValores = document.getElementById("CelularValores")
   const EmailValores = document.getElementById("EmailValores")
   const ObjetivoValores = document.getElementById("ObjetivoValores")
   const EscolaridadeValores = document.getElementById("EscolaridadeValores")
   const CursosValores = document.getElementById("CursosValores")
   const EmpresaCargoPeriodo = document.getElementById("EmpresaCargoPeriodo")
   const linhaCurso = document.getElementById("linhaCurso")
   const linhaProfissional = document.getElementById("linhaProfissional")
   const SumirCurso = document.getElementById("SumirCurso")
   const SumirExperiencia = document.getElementById("SumirExperiencia")
   const ListasExpe = document.getElementById("ListasExpe")
   const ListasObj = document.getElementById("ListasObj")
   const ListasCursos = document.getElementById("ListasCursos")
   const TituloLimpaEmpresa = document.getElementById("TituloLimpaEmpresa")
   const TitleListasObj = document.getElementById("TitleListasObj")
   const TitleListasCursos = document.getElementById("TitleListasCursos")
   const BottomAddCursos = document.getElementById("BottomAddCursos")
   const BottomAddExperiencia = document.getElementById("BottomAddExperiencia")
   const BottomAddObj = document.getElementById("BottomAddObj")
   const ButtonRemove = document.getElementById("ButtonRemove")
   const Check1Emprego = document.getElementById("Check1Emprego")
   const Emprego1 = document.getElementById("Emprego1")
   const TitleFix = document.getElementById("TitleFix")
   const TitleFixText = document.getElementById("TitleFixText")
   const button1Emprego = document.getElementById("button1Emprego")
   const ApagarTudo=document.getElementById("ApagarTudo")
   const SectionPaiTodos = document.getElementById("SectionPaiTodos")
   const downloadPdf = document.getElementById("downloadPdf")
   const ImprimirSection=document.getElementById("ImprimirSection")
   const ValorCurriculo = document.querySelector(".ValorCurriculo")
   const BtnVerificar = document.getElementById("BtnVerificar")
   const PalavraChave = document.getElementById("PalavraChave")
   const CadastrarValor = document.getElementById("CadastrarValor")
   const DefineValorCurriculo = document.getElementById("DefineValorCurriculo")
   const ValorAcrescentavel = document.getElementById("ValorAcrescentavel")
   const AtualizarCurriculo = document.getElementById("AtualizarCurriculo")
   const SumirIdioma = document.getElementById("SumirIdioma")
   const LinhaIdioma = document.getElementById("LinhaIdioma")
   const IdiomaValores = document.getElementById("IdiomaValores")
   const btnIdioma = document.getElementById("btnIdioma")
   const NoneArmazenador = document.getElementById("NoneArmazenador")
   const AdicionarIdioma = document.getElementById("AdicionarIdioma")
   const ArmazenadorInputIdioma= document.getElementById("ArmazenadorInputIdioma")
   const ButtonIdiomaConfirmar = document.getElementById("ButtonIdiomaConfirmar")
   const ListasIdioma = document.getElementById("ListasIdioma")
   const TitleListasIdioma = document.getElementById("TitleListasIdioma")
   const SumirApresentacao = document.getElementById("SumirApresentacao")
   const checarBoxApre = document.getElementById("checarBoxApre")
   const TirarApresentacao = document.getElementById("TirarApresentacao")
   const VerificaCnh = document.getElementById("VerificaCnh")
   const btnVerificaCnh = document.getElementById("btnVerificaCnh")
   const ValorCNH = document.getElementById("ValorCNH")
   const CnhValores = document.getElementById("CnhValores")
   const EnviarCnh = document.getElementById("EnviarCnh")

   btnVerificaCnh.addEventListener("click",()=>{
    if(VerificaCnh.checked === true){
        btnVerificaCnh.innerHTML="X"
        ValorCNH.style.display="block"
        CnhValores.style.display="block"
        EnviarCnh.style.display="block"

        EnviarCnh.addEventListener("click",()=>{
            CnhValores.innerHTML="CNH: " + ValorCNH.value

        })

    }else{
        btnVerificaCnh.innerHTML="✔"
        ValorCNH.style.display="none"
        CnhValores.style.display="none"
        EnviarCnh.style.display="none"
        CnhValores.innerHTML=""
    }
   })


   TirarApresentacao.addEventListener("click",()=>{
    if(checarBoxApre.checked===true){
        SumirApresentacao.style.display="none",
        checarBoxApre.value = "X"

    }else{
        SumirApresentacao.style.display="block"
        checarBoxApre.value="✔"
    }
   })


   ButtonIdiomaConfirmar.addEventListener("click",()=> Idioma())
   //api
   const VerificarCep = document.getElementById("VerificarCep")
   let endereco;

   function Idioma(){
   if(btnIdioma.checked === true){
    NoneArmazenador.style.display="block"
    AdicionarIdioma.style.display="block"
    LinhaIdioma.style.display="block"
    SumirIdioma.style.display="block"

    ButtonIdiomaConfirmar.value="x"

    AdicionarIdioma.addEventListener("click",()=>{
        if(NoneArmazenador.value == ""){
        }else{
        TitleListasIdioma.style.display="block"
        let ReservaDiv3 = document.createElement("div")
        let armazenadorIdioma = document.createElement("p")
        armazenadorIdioma.textContent = "• " + NoneArmazenador.value
        armazenadorIdioma.style.margin="0px"

        ReservaDiv3.append(armazenadorIdioma)
        ReservaDiv3.style.margin="0px"

        IdiomaValores.append(ReservaDiv3)
        let PegarVal = document.createElement("p")
        PegarVal.textContent = NoneArmazenador.value
        PegarVal.style.display="inline-block"
        PegarVal.style.marginRight="2px"
        PegarVal.style.marginTop="1px"

        let btn = document.createElement("button")
        btn.textContent="Excluir"
        btn.addEventListener("click",() => removeIdioma(btn,PegarVal,ReservaDiv3))
        btn.style.marginRight="5px"

        ListasIdioma.append(PegarVal)
        ListasIdioma.append(btn)

        NoneArmazenador.value = ""
        }
    })



   }else{
    NoneArmazenador.style.display="none"
    AdicionarIdioma.style.display="none"
    TitleListasIdioma.style.display="none"
    LinhaIdioma.style.display="none"
    SumirIdioma.style.display="none"

    ButtonIdiomaConfirmar.value="✔"
    IdiomaValores.innerHTML=""

    while(ListasIdioma.firstElementChild){
        ListasIdioma.firstElementChild.remove(ListasIdioma.firstElementChild)
    }
    


   }
}

   let b = 0;

   if(ValorCurriculo){
    let c = localStorage.getItem("ValorCurriculo")
    ValorCurriculo.innerHTML = c
    DefineValorCurriculo.value = c
   }
   if(ValorAcrescentavel){
    let c = localStorage.getItem("ValorAcrescentavel")
    ValorAcrescentavel.value = c
   }

   BtnVerificar.addEventListener('click',()=>{
    if(PalavraChave.value =="admin"){
        CadastrarValor.style.display="flex"

    }else{
        CadastrarValor.style.display="none"

    }
   })
   AtualizarCurriculo.addEventListener("click",()=>AtualizarValoresCurriculo())
   function AtualizarValoresCurriculo(){
    let c = parseFloat(DefineValorCurriculo.value)
    b = parseFloat(c)
    localStorage.setItem("ValorCurriculo", b)
    ValorCurriculo.innerHTML=b
   }

    function ValorCurriculo1(){
        if(ValorAcrescentavel.value == ""){
            ValorAcrescentavel.value = 0.75;
        }
        if(DefineValorCurriculo.value ==""){
            b = 5.00
            DefineValorCurriculo.value = 5.00;
        }
        if(Contador>3){
        b+=parseFloat(ValorAcrescentavel.value)
        localStorage.setItem("ValorAcrescentavel", ValorAcrescentavel.value)
        ValorCurriculo.innerHTML=b    
        }

    }
    function ValorCurriculoRemove(){
        if(ValorAcrescentavel.value == ""){
            ValorAcrescentavel.value = 0.75;
        }
        if(DefineValorCurriculo.value ==""){
            b = 5.00
            DefineValorCurriculo.value = 5.00;
        }
        if(Contador>3){
            b-=ValorAcrescentavel.value
            ValorCurriculo.innerHTML=b
            }
        
    }


   let Contador=0
   //Fim api
   ApagarTudo.addEventListener("click",()=> RemoverTudo())
   
   TitleFixText.addEventListener("mouseover",()=>{
       TitleFixText.innerText="Entrar em\n Contato"
   })
   TitleFixText.addEventListener("mouseout",()=>{
       TitleFixText.innerText=`Lan House \n Conectado`
   })
   
   BottomAddObj.addEventListener("click",() => AddObj())
   
   function AddObj(){
       if(Objetivo.value==0){
           
       }else{
           //Variaveis Baú
           TitleListasObj.style.display='block'
           TitleListasObj.style.marginBottom="2px"
           TitleListasObj.style.marginTop="5px"
           let reservaDiv1 = document.createElement("div")
           reservaDiv1.classList.add("reservaDiv1")
           let BotaoLimpar = document.createElement("button")
           let armazenar = document.createElement("p")
           BotaoLimpar.textContent="Limpar"
           BotaoLimpar.classList.add("botao_del")
           BotaoLimpar.addEventListener("click",() => removerOBJ(reservaDiv1,armazenar,BotaoLimpar))
           let ReservaValoresObj = document.createElement("p")
   
           BotaoLimpar.style.marginTop="0px"
           BotaoLimpar.style.marginRight="20px"
   
           ReservaValoresObj.textContent ="• " + Objetivo.value
           ReservaValoresObj.style.fontSize="15px"
           ReservaValoresObj.style.marginTop="1px"
           ReservaValoresObj.style.marginBottom="2px"
           ReservaValoresObj.style.textTransform="capitalize"
   
           armazenar.textContent=Objetivo.value
           armazenar.style.marginTop="0px"
           armazenar.style.marginRight="5px"
           armazenar.style.display="inline-block"
           BotaoLimpar.style.marginTop="0px"
           BotaoLimpar.style.marginRight="20px"
   
           
           ObjetivoValores.appendChild(reservaDiv1)
           reservaDiv1.appendChild(ReservaValoresObj)
   
           ListasObj.appendChild(armazenar)
           ListasObj.appendChild(BotaoLimpar)
       }
       Objetivo.value = ""
   }
   //add curso
   BottomAddCursos.addEventListener("click", () => AddCursos())
   
   function AddCursos(){
       if(Curso.value==0){
   
       }else{
           TitleListasCursos.style.display="block"
           TitleListasCursos.style.marginBottom="5px"
           TitleListasCursos.style.marginTop="5px"
   
           let reservaDiv2 = document.createElement("div")
           reservaDiv2.classList.add("reservaDiv2")
           let BotaoLimpar = document.createElement("button")
           let armazenar = document.createElement("p")
           BotaoLimpar.textContent="Limpar"
           BotaoLimpar.classList.add("botao_del")
           BotaoLimpar.addEventListener("click",() => removerCursos(reservaDiv2,armazenar,BotaoLimpar))
           let ReservaValoresCursos = document.createElement("p")
   
           BotaoLimpar.style.marginTop="0px"
           BotaoLimpar.style.marginRight="20px"
   
           ReservaValoresCursos.textContent ="• " + Curso.value
           ReservaValoresCursos.style.fontSize="15px"
           ReservaValoresCursos.style.marginTop="1px"
           ReservaValoresCursos.style.marginBottom="2px"
           ReservaValoresCursos.style.textTransform="capitalize"
   
           armazenar.textContent=Curso.value
           armazenar.style.marginTop="0px"
           armazenar.style.marginRight="5px"
           armazenar.style.display="inline-block"
           BotaoLimpar.style.marginTop="0px"
           BotaoLimpar.style.marginRight="20px"
   
           
           CursosValores.appendChild(reservaDiv2)
           reservaDiv2.appendChild(ReservaValoresCursos)
   
           ListasCursos.appendChild(armazenar)
           ListasCursos.appendChild(BotaoLimpar)

       }
       Curso.value=""
   }
   // Fim
   //add Experiencia
   BottomAddExperiencia.addEventListener("click",() => AddExperiencia())
   
   function AddExperiencia(){
   //Experiencia Profissional
    if(Cargo.value == 0 || Periodo.value == 0){
       if(SemExperiencia.checked===false){
       
   }
   }else{
       Emprego1.innerHTML=""
       TituloLimpaEmpresa.style.display="block"
       TituloLimpaEmpresa.style.marginBottom="5px"
       TituloLimpaEmpresa.style.marginTop="5px"
       //Variaveis Baú
       let reservaDiv = document.createElement("div")
       reservaDiv.classList.add("reservaDiv")
       let BotaoLimpar = document.createElement("button")
       let armazenar = document.createElement("p")
       BotaoLimpar.textContent="Limpar"
       BotaoLimpar.classList.add("botao_del")
       BotaoLimpar.addEventListener("click",() => removerExperiencia(reservaDiv,armazenar,BotaoLimpar))
       let ReservaValoresEmpresa = document.createElement("p")
       let ReservaValoresCargo = document.createElement("p")
       let ReservaValoresPeriodo = document.createElement("p")
       //Empresa
       ReservaValoresEmpresa.textContent =Empresa.value 
       ReservaValoresEmpresa.style.fontSize="15px"
       ReservaValoresEmpresa.style.fontWeight="bold"
       ReservaValoresEmpresa.style.marginTop="1px"
       ReservaValoresEmpresa.style.marginBottom="2px"
       //Cargo
       ReservaValoresCargo.textContent="Cargo: "+Cargo.value
       ReservaValoresCargo.style.fontSize="15px"
       ReservaValoresCargo.style.marginTop="1px"
       ReservaValoresCargo.style.marginBottom="2px"
       //Periodo
       ReservaValoresPeriodo.textContent="Período: "+Periodo.value
       ReservaValoresPeriodo.style.fontSize="15px"
       ReservaValoresPeriodo.style.marginTop="1px"
       ReservaValoresPeriodo.style.marginBottom="10px"
       //Mostrar eles
       EmpresaCargoPeriodo.appendChild(reservaDiv)
       reservaDiv.appendChild(ReservaValoresEmpresa)
       reservaDiv.appendChild(ReservaValoresCargo)
       reservaDiv.appendChild(ReservaValoresPeriodo)
       reservaDiv.style.textTransform="capitalize"
   
       //Parte de LImpar
       armazenar.textContent="Empresa: " + Empresa.value
       armazenar.style.marginTop="0px"
       armazenar.style.marginRight="5px"
       armazenar.style.display="inline-block"
       BotaoLimpar.style.marginTop="0px"
       BotaoLimpar.style.marginRight="20px"
       ListasExpe.appendChild(armazenar)
       ListasExpe.appendChild(BotaoLimpar)

       Contador+=1
       ValorCurriculo1()
       console.log(ValorCurriculo)
   }
   console.log(Contador)
   Empresa.value = ""
   Cargo.value = ""
   Periodo.value = ""
   }
   
   button1Emprego.addEventListener("click",()=>{
       if(Check1Emprego.checked===true){
            button1Emprego.value="X"
            button1Emprego.style.color="red"
           Emprego1.innerHTML="Em Busca do Primeiro Emprego."
           TituloLimpaEmpresa.style.display="none"
            Contador=0
            b=parseFloat(DefineValorCurriculo.value)
            ValorCurriculo.innerHTML=b
           while(ListasExpe.firstElementChild){
               ListasExpe.removeChild(ListasExpe.firstElementChild)
           }
           while(EmpresaCargoPeriodo.firstElementChild){
               EmpresaCargoPeriodo.removeChild(EmpresaCargoPeriodo.firstElementChild)
           }
       }else{
           Emprego1.innerHTML=""
           button1Emprego.value="✔"
           button1Emprego.style.color="green"
       }
       console.log(Contador)
   })
   
   //fim
   ButtonRemove.addEventListener("click",() => RemoverCursosOrExpe())
   function RemoverCursosOrExpe(){
   
       if(SemExperiencia.checked===true){
           Emprego1.innerHTML=""
           SumirExperiencia.innerHTML = ""
           linhaProfissional.style.display="none"
           EmpresaCargoPeriodo.innerHTML=""
           TituloLimpaEmpresa.style.display="none"
           ListasExpe.innerHTML=""
           Contador=0
           b=parseFloat(DefineValorCurriculo.value)
           ValorCurriculo.innerHTML=b
       }else{
          Emprego1.innerHTML=""
          SumirExperiencia.innerHTML="Experiência Profissional"
          linhaProfissional.style.display="block" 
          TituloLimpaEmpresa.style.display="block"
   }
       if(SemCurso.checked===true){
           SumirCurso.innerHTML = ""
           linhaCurso.style.display="none"
           CursosValores.innerHTML=""
           ListasCursos.innerHTML=""
           TitleListasCursos.innerHTML=""
       }else{
           SumirCurso.innerHTML = "Cursos"
           linhaCurso.style.display="block"
       }
   
   }
   
   //API
   VerificarCep.addEventListener("click",() => validaCEP())
   
   function PreencheCampos(endereco){
       for(const campo in endereco){
           if( document.querySelector("#" + campo)){
               document.querySelector("#" + campo).value = endereco[campo]
           }
       }
   
   }
   
   function BuscaEndereco(){
       fetch(`http://viacep.com.br/ws/${cep.value}/json`)
       .then((resposta) => {
           return resposta.json()
       })
   
       .then((endereco) =>{
           PreencheCampos(endereco)
           console.log(endereco)
       })
       .catch((erro) =>{
           console.error(erro)
       })
   }
   
   function validaCEP(){
       const RegexCEP = /^[0-9]{8}$/
       if(RegexCEP.test(cep.value)){
           BuscaEndereco()
       }else{
           throw new Error("Cep Invalido")
       }
   
   }
   //Fim API
   
   //Começo da Estrutura
   ImprimirSection.addEventListener("click",() =>{
       var pegar_dados = document.getElementById("SectionFather").innerHTML
   
   
       var janela = window.open('','','width=800,heigth=600')
       janela.document.write('<htm><head>')
       janela.document.write('<title>'+nome.value+'</title></head>')
       janela.document.write('<body')
       janela.document.write(pegar_dados)
       janela.document.write('</body> </html>')
       janela.document.close()
       janela.print()
   
   
   })
   
   //Funcoes limpa
   LimpaObj.addEventListener("click",() => LimpaObjAtt() )
       function LimpaObjAtt(){
           while(ObjetivoValores.firstElementChild){
               ObjetivoValores.removeChild(ObjetivoValores.firstElementChild)
           }
           while(ListasObj.firstElementChild){
               ListasObj.removeChild(ListasObj.firstElementChild)
           
           }
   }
   
   LimpaCurso.addEventListener("click",()=> LimpaCursoAtt())
       function LimpaCursoAtt(){
           while(CursosValores.firstElementChild){
               CursosValores.removeChild(CursosValores.firstElementChild)
           }
           while(ListasCursos.firstElementChild){
               ListasCursos.removeChild(ListasCursos.firstElementChild)
           }
       }
   
   LimpaExpe.addEventListener("click",()=> LimpaExpeAtt())
       function LimpaExpeAtt(){
           while(ListasExpe.firstElementChild){
               ListasExpe.removeChild(ListasExpe.firstElementChild)
           }
           while(EmpresaCargoPeriodo.firstElementChild){
               EmpresaCargoPeriodo.removeChild(EmpresaCargoPeriodo.firstElementChild)
           }
           Contador=0
           b=parseFloat(DefineValorCurriculo.value)
           ValorCurriculo.innerHTML=b
           console.log(b)
       }
   //End
   Proximo.addEventListener("click",()=>{
       PerfilProfissional.style.display="block"
       DocumentosPessoais.style.display="none"
   })
   
   Voltar.addEventListener("click",()=>{
       PerfilProfissional.style.display="none"
       DocumentosPessoais.style.display="block"
   })
   
   function RemoverTudo(){
       let a = confirm("Você tem Certeza que quer apagar tudo?")
       if(a===true){
       NomeValores.innerHTML ="Nome e Sobrenome";
       NomeValores.style.textTransform="capitalize"
   
       DataValores.innerHTML="Data de Nascimento: ";
       EnderecoValores.innerHTML = "Endereço: .Nº "
       EnderecoValores.style.textTransform="capitalize"
   
       BairroValores.innerHTML = "Bairro: "
       BairroValores.style.textTransform="capitalize"
   
       CidadeValores.innerHTML = "Cidade: "
       CidadeValores.style.textTransform="capitalize"
   
       CepValores.innerHTML="CEP: "
       CelularValores.innerHTML = "Celular: "
       EmailValores.innerHTML="E-mail: "
   
       EscolaridadeValores.innerHTML=" "
       EscolaridadeValores.style.marginTop="1px"
       EscolaridadeValores.style.textTransform="capitalize"
   
           LimpaObjAtt()
           TitleListasObj.style.display="none"
   
           LimpaCursoAtt()
           TitleListasCursos.style.display="none"
   
           LimpaExpeAtt()
           TituloLimpaEmpresa.style.display="none"
   
           Emprego1.innerHTML=""
           Check1Emprego.checked=false
   
           RemoveValores()

           Contador=0
           b=parseFloat(DefineValorCurriculo.value)
           ValorCurriculo.innerHTML=b
       }
   }
   
   Finalizar.addEventListener("click",() => FinalizarValores())
   //a Cabeça de tudo
   function FinalizarValores(){
       SectionValores.style.visibility="visible"
   
       NomeValores.innerHTML = nome.value;
       NomeValores.style.textTransform="capitalize"
   
       DataValores.innerHTML="Data de Nascimento: " + DataNascimento.value;
       EnderecoValores.innerHTML = "Endereço: " + logradouro.value+"."+ " Nº " + NumeroCasa.value
       EnderecoValores.style.textTransform="capitalize"
   
       BairroValores.innerHTML = "Bairro: "+ bairro.value
       BairroValores.style.textTransform="capitalize"
   
       CidadeValores.innerHTML = "Cidade: "+ localidade.value
       CidadeValores.style.textTransform="capitalize"
   
       CepValores.innerHTML="CEP: "+cep.value
       CelularValores.innerHTML = "Celular: "+NumeroCelular.value
       EmailValores.innerHTML="E-mail: "+Email.value
   
       EscolaridadeValores.innerHTML="• "+Escolaridade.value
       EscolaridadeValores.style.marginTop="1px"
       EscolaridadeValores.style.textTransform="capitalize"

    console.log(Contador)
   }
   
   //Parte das Section que remove
   function removerExperiencia(reservaDiv,armazenar,BotaoLimpar){
       EmpresaCargoPeriodo.removeChild(reservaDiv)
           /*Texto*/ListasExpe.removeChild(armazenar)
           /*Botao*/ListasExpe.removeChild(BotaoLimpar)
           ValorCurriculoRemove()
           Contador-=1
   }
   
   function removerOBJ(reservaDiv1,armazenar,BotaoLimpar){
       ObjetivoValores.removeChild(reservaDiv1)
       /*Texto*/ListasObj.removeChild(armazenar)
       /*Botao*/ListasObj.removeChild(BotaoLimpar)
   }
   function removerCursos(reservaDiv2,armazenar,BotaoLimpar){
       CursosValores.removeChild(reservaDiv2)
       /*texto*/ListasCursos.removeChild(armazenar)
       /*Botao*/ListasCursos.removeChild(BotaoLimpar)
   
   }
   function removeIdioma(btn, PegarVal,ReservaDiv3){
        IdiomaValores.removeChild(ReservaDiv3)
            ListasIdioma.removeChild(btn)
            ListasIdioma.removeChild(PegarVal)
   }
   CursosValores
   
   function RemoveValores(){
       nome.value=""
       DataNascimento.value=""
       cep.value=""
       NumeroCasa.value=""
       bairro.value=""
       logradouro.value=""
       localidade.value=""
       NumeroCelular.value=""
       Email.value=""
       Escolaridade.value=""
       CnhValores.innerHTML=""

   }
   //Fim

   