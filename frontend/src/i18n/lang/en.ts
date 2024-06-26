export default {
  header: {
    server:{
      Tranquility:"Tranquility",
      Serenity:"Serenity"
    },
    region: {
      TheForge:"The Forge",
      Domain:"Domain",
      Heimatar:"Heimatar",
      SinqLaison:"Sinq Laison"
    }
  },
  config: {
    form: {
      materialPrice: "Material Price",
      materialPlaceholder: "Please select a type",
      productPrice: "Product Price",
      productPlaceholder: "Please select a type",
      scope: "Weighted Price",
      scopePlaceholder: "Please select a percentage",
      days: "Date Range",
      daysPlaceholder: "Please select a date range",
      tax: "Tax",
      week: "7d",
      month: "30d",
      season: "90d",
      buyPrice: "Buy Price",
      sellPrice: "Sell Price",
    },
    tableForm:{
      title: "Table",
      calculator: "Calculator",
      calculatorPlaceholder: "Enable calculator or not",
      calculatorEnable: "Enable",
      calculatorDisable: "Disable",
      layout: "Table Layout",
      layoutPlaceholder: "Please select table layout",
      layoutAuto: "Auto",
      layoutFixed: "Fixed",
      highlight: "Highlight Row",
      highlightPlaceholder: "Enable highlight selected row or not",
      highlightEnable: "Enable",
      highlightDisable: "Disable",
    },
    desc: {
      title: "Description",
      dataDesc: "Data",
      tableDesc: "Column",
      claim: "Copyright Notice",
      blueprint: "Blueprint",
      materialContent: "Price type for all materials(requirements, blueprint materials)",
      productPriceContent: "Price type for all LP store items",
      scopeContent: "Price calculation for all items. Low-priced & high-volume orders are already filtered out in backend. And the sell and buy prices are the average prices of the lowest or highest x% quantity prices",
      daysContent: "The volume column in the table is the average of the total volume during the Date Range",
      taxContent: "Income and profit will be taxed at the configuration ratio",
      costContent: "Total price of all materials(requirements, blueprint materials)",
      incomeContent: "Price of item price multiplied by quantity after tax",
      volumeContent: " Average volume on the Date Range",
      saleIndexContent: "This value is designed to highlight items with high transaction and a high LP ratio. It's calculated by multiplying the scores of three indicators: item daily transaction ISK amount, avg daily volume and ISK/LP",
      unitProfitContent: "ISK profit after tax per LP point",
      blueprintContent: "The blueprint price in the table and order based on the blueprint output",
      claimContent: "EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide"+
      "All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos "+
      "and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, "+
      "world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf."
    },
    corporation:' Please select or type corp',
    title: 'Configuration',
    data:"Data",
    quickBar: "Qucikbar",
    description: "Description",
    quickbarTitle: "Quickbar",
    sourceList: "All",
    targetList: "Quickbar",
    close: "Close",
    reset: "Reset",
  },
  table: {
    name: "Item",
    quantity: "Quantity",
    lpCost: "LP Cost",
    iskCost: "ISK Cost",
    materialCost: "Material Cost",
    price: "Price",
    income: "Income",
    profit: "Profit",
    volume: "Volume",
    saleIndex: "Sales Index",
    unitProfit: "ISK/LP",
    lookUp: "Item name lookup",
    order: "Order",
    operation: "Operation",
    error: "Error",
    material: {
      lpStoreMaterial: "Requirements",
      bluePrintMaterial: "Production Materials",
      name: "Name",
      quantity: "Quantity",
      price: "Price",
      type: "Type",
      cost: "Cost",
      error: "Error",
      copy: "Copy",
      copySuccess: "Copied!",
      copyFail: "Copy failed!",
      sum: "Sum",
    },
    err: {
      productBuy:"failed to get buy price for <b>$1</b>",
      productSell:"failed to get sell price for <b>$1</b>",
      materialBuy:"failed to get buy price for production material <b>$1</b>",
      materialSell:"failed to get sell price for production material <b>$1</b>",
      requirementBuy:"failed to get sell price for requirement <b>$1</b>",
      requirementSell:"failed to get sell price for requirement <b>$1</b>",
      buyOrder:"no buy order found in the market",
      sellOrder:"no sell order found in the market",
      order:"no order found in the market"
    },
  },
  calculator: {
    title: "Calculator",
    empty: "No row selected!",
    close: "Close",
    calculate: "Calculate",
    lpCost: "LP Cost",
    iskCost: "ISK Cost",
    materialCost: "Material Cost",
    profit: "Max Profit",
    unitProfit: "Max ISK/LP",
    reset: "Reset",
    materialList:"Material List",
  },
  order: {
    sellOrder: "Sellers",
    buyOrder: "Buyers",
    history: "History",
    orderId: "OrderId",
    systemName: "Location",
    volume: "Volume",
    price: "Price",
    unitProfit: "ISK/LP",
    expiration: "Expiration",
    lastUpdated: "Last Updated",
    statis: {
      lpRange: "ISK/LP Range",
      number: "Quantity",
      cost: "Cost",
      income: "Income",
      profit: "Profit",
      avgLpPrice: "Avg ISK/LP",
      unitProfit: "ISK/LP",
    },
    stock: {
      average: "Avg(d)",
      minAndmax: "Min/Max(d)",
      average5d: "Moving Avg(5d)",
      average20d: "Moving Avg(20d)",
      minAndmax5d: "Min/Max(5d)",
      volume: "Volume",
      price: "Price",
      rangeSelector: {
        month: "1m",
        threeMonths: "3m",
        halfYear: "6m",
        yearToDay: "YTD",
        year: "1y",
        all: "All",
      },
    },   
  },
}