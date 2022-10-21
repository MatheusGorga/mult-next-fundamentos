const meusCursos = [
  {
    id: '1',
    nome: 'React'
  },
  {
    id: '2',
    nome: 'Next'
  }
]

export default function Cursos(request, response) {
  const id = request.query.cursoId,
    curso = meusCursos.find(meuCurso => meuCurso.id === id)
  if (curso) {
    response.status(200).json(curso)
  } else {
    response.status(404).json({
      mensagem: 'nenhum curso encontrado'
    })
  }

}