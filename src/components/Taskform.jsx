import {useState} from "react";

function TaskForm({onAdicionar}){
    const [titulo,setTitulo] = useState("");
    const [categoria,setCategoria] = useState("Estudos");
    const [prioridade,setPrioridade] = useState("media");

    function aoEnviar(evento) {
        evento.preventDefaul();
        if (titulo.trim() === "") return;
        onAdicionar({titulo,categoria,prioridade});
        setTitulo(""); 
    }

    return(
        <form onSubmit={onEnviar} className="bg-white rounded-xl shadow-md p-5 mb-8 items-end flex flex-wrap">
            <div className="min-w-[300px]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nova tarefa
                </label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="O que precisa ser feito?" className="border border-slate-300 rounded-lg px-3 py-2"/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Categoria
                </label>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="border border-slate-300 rounded-lg px-3 py-2">
                    <option>Estudos</option>
                    <option>Projeto</option>
                    <option>Saúde</option>
                    <option>Pessoal</option>
                </select>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Prioridade
                    </label>
                    <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                        <option value="alta">Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                    </select>
                </div>
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 font-bold py-2 px-4 rounded-lg transition-colors">
                    ➕ Adicionar
                </button>
            </div>
        </form>
    );
}
export default TaskForm;