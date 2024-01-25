function integratePivotTable(id, data) {
    // Parse the incoming data from a JSON string into an object
    var pivotData = JSON.parse(data);
    // Initialize pivot table component
    var pivotTableObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            // Assign the parsed data here
            dataSource: pivotData,
            expandAll: false,
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount'}],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            expandAll: false,
            filters: []
        },
        width: 1300,
        height: 290,
        gridSettings: { columnWidth: 120 },
        showFieldList: true
    });
    // Append the pivot table to the DOM element with the specified ID
    pivotTableObj.appendTo('#' + id);
}