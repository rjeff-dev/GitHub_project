import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secudario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ducimus dignissimos ratione. Nihil vel reiciendis placeat tempore maxime, laborum dicta accusantium delectus id veritatis molestias perspiciatis ratione aspernatur, ducimus consectetur.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=rjeff-dev&show_icons=true&theme=dracula"
        alt="GitHub stats"
      />
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=rjeff-dev&layout=compact&theme=dracula"
        alt="Top languages"
      />
    </GithubSecao>
  </section>
)

export default Sobre
