import { useContext, useMemo } from "react";
import PostsContext from "./PostsContext";
import Alerta from "../../comuns/Alerta";
import { MaterialReactTable } from 'material-react-table';
import { MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

function Tabela() {

    const { alerta, listaObjetos, remover, editarObjeto, novoObjeto }
        = useContext(PostsContext);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
            },
            {
                accessorKey: 'titulo',
                header: 'Título'
            },
            {
                accessorKey: 'tipo',
                header: 'Tipo'
            },
            {
                accessorKey: 'texto',
                header: 'Texto'
            },
            {
                accessorKey: 'url',
                header: 'Url'
            },
            {
                accessorKey: 'usuario',
                header: 'Usuário'
            },
            {
                accessorKey: 'email',
                header: 'Email'
            },
            {
                accessorKey: 'uid',
                header: 'UID'
            },
        ],
        [],
    );

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4">
                Posts
            </Typography>
            <Alerta alerta={alerta} />
            <Button variant="outlined"
                onClick={() => novoObjeto()}>
                <AddIcon /> Novo
            </Button>
            {listaObjetos.length === 0 &&
                <Typography variant="h4">
                    Nenhum Post encontrado
                </Typography>}
            {listaObjetos.length > 0 && (
                <MaterialReactTable
                    enableGlobalFilter={true}
                    showColumnFilters={true}
                    columns={columns}
                    data={listaObjetos}
                    enableColumnFilters={true}
                    enableRowActions
                    positionActionsColumn="last"
                    displayColumnDefOptions={{
                        'mrt-row-actions': {
                            header: 'Ações',
                            enableColumnFilter: false
                        }
                    }}
                    renderRowActionMenuItems={({ row }) => [
                        <MenuItem key="editar" onClick={() => editarObjeto(row.original)}>
                            <EditIcon fontSize="small" /> Editar
                        </MenuItem>,
                        <MenuItem key="remover" onClick={() => remover(row.original)}>
                            <DeleteIcon fontSize="small" /> Apagar
                        </MenuItem>
                    ]}
                />
            )}
        </div>
    )

}

export default Tabela;