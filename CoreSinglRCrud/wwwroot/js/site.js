 
 
$(() => {

    LoadProductData();
    var connection = new signalR.HubConnectionBuilder().withUrl("/signalrServer").build(); 
    connection.start();
    connection.on("LoadProducts", function() {
        LoadProductData();
    });
    LoadProductData();
    function LoadProductData() {
        var tr = '';
        $.ajax({

            url: "/Products/GetProducts",
            method: 'GET',
            success: (result) => {
                $.each(result, (k, v) => {
                    tr += `<tr>
                        <td>${v.ProdName}</td>
                        <td>${v.Category}</td>
                        <td>${v.UnitPrice}</td>
                        <td>${v.StockQnty}</td>
                        <td>
                            <a href='../Products/Edit?id=${v.ProdId}'>Edit</a> 
                            <a href='../Products/Details?id=${v.ProdId}'>Details</a> 
                            <a href='../Products/Delete?id=${v.ProdId}'>Delete</a> 
                        </td>
                    </tr>`
                })
                $("#tblProduct").html(tr);
            },
            error: (error) => {
                console.log(error);
            }
        });
    }



})