module.exports = ({
    date,
    rname,
    raddress,
    sname,
    saddress
}) => {
    const today = new Date();
    return `
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
        .invoice-box {
            max-width: 700px;
            margin: auto;
            padding: 30px;
            border: 1px solid rgb(168, 161, 161);
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica',

        }

        .margin-top {
            margin-top: 50px;
        }

        .justify-center {
            text-align: left;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
            margin-left: 70px;
        }

        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: left;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 40px;

        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: left;
            }
        }
    </style>
</head>

<body>
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0" >
            <div style="padding:90px 200px;">
                <h3>Graphical Design Invoice Template</h3>
            </div>
          
           
                    <table style="margin-bottom: 40px;">
                        <tr>
                            <td>
                                From<br/>
                                ${rname}<br />
                                ${raddress}

                            </td>
                            <td>
                                To<br/>
                                ${sname}<br />
                                ${saddress}
                            </td>
                            
                        </tr>
                    </table>
               
                    <table style="margin-bottom: 100px;" >
                        <tr>
                            <td>
                                ISSUED ON :<br/> ${date}

                            </td>
                            <td>
                                DUE ON: <br/>hjh
                            </td>
                        </tr>
                    </table>
               
        <table>
            
            <tr>
                <th>Item Nmae</th>
                <th>Rate</th>
                <th>Unit</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>Graphical Design Service</td>
                <td>28</td>
                <td>$80.00</td>
                <td>$224,000</td>
            </tr>
            <tr>
                <td>Other Service</td>
                <td>16</td>
                <td>$55.00</td>
                <td>$880,000</td>
            </tr>
            <tr>
                <td>Sub Total</td>
                <td></td>
                <td></td>
                <td>$224,000</td>
            </tr>
            <tr>
                <th>Total A mount</th>
                <td></td>
                <td></td>
                <th>$3120,00(USD)</th>
            </tr>
          
        </table>
        
        </table>
        <br />
        <div style="margin-left: 70px;">
            <h4>PAYMENT</h4>
            <p>The Client can pay via wire tranfer or mailcheck</p>
            <p>The client will not pay the proccessing for any online payment</p> <br />
        </div>
    </div>
</body>

</html>
`;
};