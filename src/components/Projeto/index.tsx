import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"

import { Card, LinkBotao } from "./style"

const Projeto = () => (
  <Card>
    <Titulo>Projeto - Lista de tarefas</Titulo>
    <Paragrafo tipo="secudario">Lista de  tarefa feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
