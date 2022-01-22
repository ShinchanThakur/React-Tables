import {format} from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',  //This is the column name in the data (json or csv)
        disableFilters: true   //Use this if you want to disable filter in any column
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'  //We can explicitly define an id for each column
                                //But if we dont do that, then accessor is also the id for each column
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell:       //Cell property controls what is rendered in the UI
                ({ value }) => { return format(
                    new Date(value),    //value of date is stored in string format in the json file,
                                        //Therefore we convert it to date object first

                    'dd/MM/yyyy')       //This tells that the format to be shown in the table is dd/MM/yyyy
                }
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]