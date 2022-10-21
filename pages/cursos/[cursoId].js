import { useRouter } from "next/router"

export default function Cursos() {
  const router = useRouter()
  const id = router.query.cursoId

  return (
    <div>
      <h1>
        Tela de Cursos
      </h1>
      <hr />
      <br />

      <h4>
        Meu Curso - {id}
      </h4>

    </div>
  )
}