new Vue({
  el: '#app',
  data: () => ({
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    search: '',
    isMobile: false,
    headers: [{
        text: 'Company Name',
      color:'blue',
        align: 'center',
        value: 'name',
      sortable:false
      },
      {
        text: 'Model',
        align: 'center',
        value: 'model',
        sortable:false
      },
      {
        text:'Luanch Year',
        align: 'center',
        value:'luanchyear',
        sortable:false
      },
      {
        text: 'Price',
        align: 'center',
        value: 'price',
        sortable:false
      },
      
    ],
    mobilephones: [{
        name: 'Motorola',
        model: 'Moto G4 Plus',
        luanchyear: '2016',
        price: "14,999"
      },
      {
        
        name: 'Asus',
        model: 'Asus Zenfone Max Pro M1',
        luanchyear: '2018',
        price: '11,999'
      },
      {
        
        name: 'Realme',
        model: 'Realme 2',
        luanchyear: '2018',
        price: "8,999"
      },
      {
        value: false,
        name: 'Iphone',
        model: 'Iphone SE',
        luanchyear: '2017',
        price: "17,999"
      },
      {
        value: false,
        name: 'Realme',
        model: 'Realme 2 Pro',
        luanchyear: '2018',
        price: "13,999"
      },
      {
        value: false,
        name: 'Xaomi',
        model: 'Redmi Note 5 Pro',
        luanchyear: '2017',
        price: "14,999"
      },
      {
        value: false,
        name: 'Xaomi',
        model: 'Redmi note 6 Pro',
        luanchyear: '2018',
        price: "15,999"
      },
      {
        value: false,
        name: 'Honor',
        model: 'Honor 7A',
        luanchyear: '2018',
        price: "7,999"
      },
      {
        value: false,
        name: 'Samsung',
        model: 'Samsung S3',
        luanchyear: '2012',
        price: "21,999"
      },
      {
        value: false,
        name: 'Vivo',
        model: 'Vivo V11 Pro',
        luanchyear: '2018',
        price: "25,999"
      }
    ]
  }),

  methods: {
    onResize() {
      if (window.innerWidth < 769)
        this.isMobile = true;
      else
        this.isMobile = false;
    },
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
  }
})