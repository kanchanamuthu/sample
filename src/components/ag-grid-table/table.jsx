import React from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import "./table.css";
import { useState } from "react";

export const Table  = () => {
    
 
    const [gridApi, setGridApi] = useState(null);
    const [rowData, setRowData] = useState();
      
    const columns = [
        {
            headerName:"Post_Id",field:'postId',checkboxSelection:true,headerCheckboxSelection:true
        },
        {
            headerName:"Id",field:'id'
        },
        {
            headerName:"Name",field:'name'
        },
        {
            headerName:"Email",field:'email'
        },
        {
            headerName:"Body",field:'body',tooltipField:"name"
        },
         
    ]
    
    const defaultColDef = {
        sortable:true,
        editable:true,
        filter:true,
        floatingFilter:true,
        flex:1
    }

    
  
    const onGridReady = (params) => {
   
        fetch("https://jsonplaceholder.typicode.com/comments").then(resp=>resp.json())
        .then(resp=>{
            params.api.applyTransaction({add:resp})
        })
        setGridApi(params.api)
    }

    //export as csv
    const onExportClick = () =>
    {
        gridApi.exportDataAsCsv();
    }
    
    //multiple row selection
    const rowSelectionType='multiple'
    const onSelectionChanged = (event) =>{
        console.log(event.api.getSelectedRows())
    }

    //select rows based on condition(multiple conditions => or condition)

    const isRowSelectable = (node) =>
    {
            return node.data?(node.data.id%2==0 || node.data.email.includes('.org')):false 
    }

  
    const onFilterTextChange = (e) => {
        gridApi.setQuickFilter(e.target.value);
       }

    return( 
    <div 
        className="ag-theme-alpine"
        id = "myGrid"
        style={{
            height:'500px',
            width: '1260px'

        }}>
              <div className = "InputDivStyle">          
              <input type = "search" className = "searchStyle" onChange = {onFilterTextChange} placeholder="search something"/>
              </div>
              <p><button onClick = { () => onExportClick()}>export</button></p>
          <AgGridReact 
          //rowData = {data} 
          columnDefs={columns} 
          defaultColDef={defaultColDef}
          onGridReady = {onGridReady}
          enableBrowserTooltips = {true}
          tooltipShowDelay = {{tooltipShowDelay:2}}
          rowSelection={rowSelectionType}
          onSelectionChanged = {onSelectionChanged}
          rowMultiSelectWithClick = {true}
          //isRowSelectable = {isRowSelectable}
          pagination = {true}
          rowData = {rowData}
          paginationPageSize = {6}
        >
          </AgGridReact>    
    </div>
  
    )
}

