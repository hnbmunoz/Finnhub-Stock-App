import { AgGridReact } from 'ag-grid-react';
import { useEffect, useRef, useState } from 'react';


const gridOverlayTemplate =
  '<span class="ag-overlay-loading-center"><span id="custom-grid-loading-overlay">No Rows To Show</span></span>';

interface GridWithLoaderProps {
  rowData?: any;
  columnDefs?: any;  
  isLoading?: boolean;
  height?: number;
  width?: number;  
}

const GridWithLoader = ({ rowData, columnDefs, isLoading, height, width }: GridWithLoaderProps) => {
  const gridRef: any = useRef();
  const [gridApi, setGridApi] = useState<any>(null);
 
  const onGridReady = (params: any) => {
    setGridApi(params.api);    
    params.api.sizeColumnsToFit();
  };

  useEffect(() => {
    gridApi && rowData.length > 0 && gridApi.hideOverlay();
    return () => { }
  }, [rowData])
  

  useEffect(() => {
    const loadingOverlay = document.getElementById('custom-grid-loading-overlay') as HTMLElement;
    if (!isLoading && (rowData === undefined || rowData.length === 0)) {     
      loadingOverlay && (loadingOverlay.innerText = 'No Rows To Show');
    } else {
      loadingOverlay && (loadingOverlay.innerText = 'Please wait while your items are loading');
    }
  }, [isLoading]);
  return (
    <div className='ag-theme-alpine pt-10' style={{ height: height ?? 500, width: width ?? '100%', marginBottom: '50px' }}>
      <AgGridReact
        rowData={rowData}
        defaultColDef={{
          sortable: true,
          resizable: true,
        }}
        onGridReady={onGridReady}
        rowBuffer={0}
        enableRangeSelection={true}
        pagination={true}
        columnDefs={columnDefs}        
        overlayNoRowsTemplate={gridOverlayTemplate}
        paginationPageSize={20}
        ref={gridRef}
        
      />
    </div>
  )
}

export default GridWithLoader