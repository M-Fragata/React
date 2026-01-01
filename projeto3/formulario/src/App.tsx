import "./App.css"

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type formData = {
  name: string
  date: string
  subject: string
  description: string
}

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
  subject: yup.string().required("Assunto é obrigatório"),
  description: yup.string().required("Descrição é obrigatória").min(10, "Descrição deve ter no mínimo 10 caracteres")
})

export default function App() {

  const { control, handleSubmit, formState: { errors } } = useForm<formData>({
    defaultValues: {
      name: "",
      date: new Date().toISOString().substring(0, 10),
      subject: "",
      description: ""
    },
    resolver: yupResolver(schema),
  })

  function onSubmit(data: formData) {
    if(!data.name.trim() || !data.date.trim() || !data.subject.trim()) {
      alert("Preencha todas as informações obrigatórias")
      return
    }
    console.log(data)
  }


  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => <input
            type="text"
            placeholder="Nome do evento"
            {...field}
          />}
        />

        <span className="error">{errors.name?.message}</span>

        <Controller
          control={control}
          name="date"
          render={({ field }) => <input
            type="date"
            placeholder="Nome do evento"
            {...field}
          />}
        />

        <span className="error">{errors.date?.message}</span>

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Javascript">Javascript</option>
              <option value="Typescript">Typescript</option>
            </select>
          )}
        />  

        <span className="error">{errors.subject?.message}</span>

        <Controller 
          control={control}
          name="description"
          render={({field}) => <textarea {...field} placeholder="Descrição" rows={4} />}
        /> 

        <span className="error">{errors.description?.message}</span>

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
