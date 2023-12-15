import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import BTable from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { List } from "react-virtualized";
import { UserContentDetial } from "./UserContentDetial";
import { useTable } from 'react-table'

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <BTable striped bordered hover size="sm"  {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </BTable>
    )
  }

  export const HomeContent = (props) => {
    

    const [homeMessage, setHomeMessage] = React.useState(null);
    const [data, setData] = React.useState([])
    const [userData, setUserData] = React.useState([])
    const [tabKey, setTabKey] = React.useState('table');
    function showHomeMessage() {
        setHomeMessage("showHomeMessage");
        console.log("showHomeMessage");
    }
    async function clearHomeMessage() {
        setHomeMessage("");
        
        console.log("clearHomeMessage");
    }

    async function showHasAsyncAwait() {
        let resJson = await getUsers();
        resJson.forEach(element => {
            console.log(element);
        });
        console.log(resJson);
        setHomeMessage("showHasAsyncAwait");
        
        console.log("showHasAsyncAwait");
    }

    function showNoAsyncAwait() {
        let promise = getUsers();
        promise.then(res => {
            console.log(res);
            res.forEach(element => {
                console.log(element);
            });
        });
        console.log(promise);
        setHomeMessage("showNoAsyncAwait");
        
        console.log("showNoAsyncAwait");
    }

    async function showUserWithTable() {
        let resJson = await getUsers();
        resJson.forEach(element => {
            console.log(element);
        });
        console.log(resJson);
        setData(resJson);
        setHomeMessage("showUserWithTable");
        
        
        console.log("showHasAsyncAwait");
    }

    function clearUserWithTable() {
      setData([]);
      setHomeMessage("clearUserWithTable");
      
      
      console.log("clearUserWithTable");
  }
    
    function getUsers(){
        const headers = new Headers()
        const options = {
            method: "GET",
            headers: headers,
            //mode: 'no-cors'
        };
        const uri = "https://jsonplaceholder.typicode.com/users/"
        
        return fetch(uri, options).then(response => response.json())
        
    }
    console.log("homecontent");

    const columns = React.useMemo(
        () => [
          {
            Header: 'Name',
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'User Name',
                accessor: 'username',
              },
            ],
          },
          {
            Header: 'Info',
            columns: [
              {
                Header: 'Email',
                accessor: 'email',
              },
              {
                Header: 'Phone',
                accessor: 'phone',
              },
              {
                Header: 'website',
                accessor: 'website',
              },
              {
                Header: 'company name',
                accessor: 'company.name',
              },
            ],
          },
        ],
        []
      )
    
    function rowRenderer({ key, index, isScrolling, style }) {
        if(isScrolling){
            return <div key={ key } style={ style }>Updating</div>
        }else{
            //return <div key={ key } style={ style }>{ data[index].name }</div>
            return <UserContentDetial key={key} style={style} user={userData[index]}/>
        } 
    }

    async function showUserWithList() {
        let resJson = await getUsers();
        resJson.forEach(element => {
            console.log(element);
        });
        console.log(resJson);
        
        setUserData(resJson);
        console.log(userData.length);
        
        console.log("showHasAsyncAwait");
    }
    useEffect(() => {
      //showUserWithList();
    }, []);
      
    return (
        <div id="HomeContent-div">
            <p><strong>HomeContent</strong> </p>
            {homeMessage}
            <div className="h-4">
            <Button onClick={() => showHomeMessage()} className="btn btn-dark">
                Show and Rerender
            </Button>
            <Button onClick={() => clearHomeMessage()} className="btn btn-dark">
                Clear and Rerender
            </Button>
            <Button onClick={() => showHasAsyncAwait()} className="btn btn-dark">
                showHasAsyncAwait
            </Button>
            <Button onClick={() => showNoAsyncAwait()} className="btn btn-dark">
                showNoAsyncAwait
            </Button>
            <Button onClick={() => showUserWithTable()} className="btn btn-dark">
                showUserWithTable
            </Button>
            <Button onClick={() => clearUserWithTable()} className="btn btn-dark">
                ClearUserWithTable
            </Button>
            <br/>
            <br/>
            
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              activeKey={tabKey}
              onSelect={(k) => setTabKey(k)}
              className="mb-3"
              justify
            >
              <Tab eventKey="table" title="react-table v7">
                <Table columns={columns} data={data} />
              </Tab>
              <Tab eventKey="list" title="react-virtualized">
                <List
                  // window height
                  height={300}
                  // window width
                  width={300}
                  // prerender rows
                  overscanRowCount = { 2 }
                  // total count
                  rowCount={userData.length}
                  // row height
                  rowHeight={60}
                  style={{ outline: "none" }}
                  rowRenderer={rowRenderer}
                />
              </Tab>
              <Tab eventKey="longer-tab" title="Loooonger Tab">
                Tab content for Loooonger Tab
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
            
            </div>
        </div>
    );
    
    
    }

