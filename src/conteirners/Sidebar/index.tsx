import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descrição, ButtonTema, SidebarContainer } from './style'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Roberto Jefferson</Titulo>
      <Paragrafo tipo="secudario" fontSize={16}>
        r,jeff-dev
      </Paragrafo>
      <Descrição tipo="principal">Java Full-Stack-</Descrição>
      <ButtonTema>Trocar tema</ButtonTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
