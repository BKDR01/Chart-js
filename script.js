let ctx = document.querySelector('#myChart')
let ctx2 = document.querySelector('#myChart2')
let ctx3 = document.querySelector('#myChart3')
let ctx4 = document.querySelector('#myChart4')
let ctx5 = document.querySelector('#myChart5')
let ctx6 = document.querySelector('#myChart6')
let ctx7 = document.querySelector('#myChart7')
let ctx8 = document.querySelector('#myChart8')


new Chart(ctx2, {
    type: 'bar',
    title: 'hello' , 
    data: {
      labels: ['January', 'February', 'March', 'Aprel', 'May', 'June' , 'Julay'],
      datasets: [
       {
        label: 'Datasent 1',
        data: [-420 , 400 , -220 , 150 , -980 , 750 , -30],
        borderWidth: 1 ,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',       
    },
       {
        label: 'Datasent 2 ',
        data: [430 , -820 , 140 , -500 , 230, -350 , 120],
        borderWidth: 1 , 
        backgroundColor: 'rgba(255, 206, 86, 0.6)',    
       }    
      ]
    },
    options: {
        indexAxis: 'y', 
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'Chart 2', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        }

    }
});



new Chart(ctx, {
    type: 'bar',
    title: 'hello' , 
    data: {
      labels: ['January', 'February', 'March', 'Aprel', 'May', 'June' , 'Julay'],
      datasets: [
       {
        label: 'Datasent 1',
        data: [420 , 400 , 220 , 150 , 980 , 750 , 30],
        borderWidth: 2 ,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',      
     },
       {
        label: 'Datasent 2 ',
        data: [430 , 820 , 140 , 500 , 230, 350 , 120],
        borderWidth: 1 , 
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
    },
    
      ]
    },
    options: {
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'Chart', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        },
    }
});


new Chart(ctx3, {
    type: 'line',
    title: 'hello' , 
    data: {
      labels: ['January', 'February', 'March', 'Aprel', 'May', 'June' , 'Julay'],
      datasets: [
       {
        label: 'Datasent 1',
        data: [420 , 400 , 220 , 150 , 980 , 750 , 30],
        borderWidth: 2 ,
        fill: false,
        borderColor: 'rgba(185, 173, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        tension: 0.1,
     },
       {
        label: 'Datasent 2 ',
        data: [430 , 820 , 140 , 500 , 230, 350 , 120],
        borderWidth: 1 , 
        fill: false,
        borderColor: 'rgba(255, 206, 86, 0.6)',
        backgroundColor: 'rgba(255, 206, 86, 0.6)',      
        tension: 0.1,
    },
      ]
    },
    options: {
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'line', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        }

    }
});





new Chart(ctx4, {
    type: 'bar',
    title: 'hello' , 
    data: {
      labels: ['January', 'February', 'March', 'Aprel', 'May', 'June' , 'Julay'],
      datasets: [
       {
        label: 'Datasent 1',
        data: [420 , 400 , 220 , 150 , 980 , 750 , 30],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',      
     },
       {
        label: 'Datasent 2 ',
        data: [430 , 820 , 140 , 500 , 230, 350 , 120],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
    },
    {
        label: 'Dataset 3',
        data: [100, -100, 200, -300, 100, 200, 300],
        backgroundColor: 'rgba(195, 248, 223, 1)',
        borderColor: 'rgba(195, 248, 223, 1)',
    },
    
      ]
    },
    options: {
        scales: {
    x: {
        stacked: true, // Включение стеков для оси X
    },
    y: {
        stacked: true, // Включение стеков для оси Y
    },
},
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'bar x and y ', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        },
    }
});




new Chart(ctx5, {
    type: 'polarArea',
    title: 'hello' , 
    data: {
      label: ['Yellow' , 'red'],
      datasets: [
       {
        data: [11, 16, 7, 3, 14, 8],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1 
       }]
    },
    options: {
        scales: {
            r: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'polarArea', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        }
    
    }
});




new Chart(ctx6, {
    type: 'doughnut',
    title: 'hello' , 
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'violet',
            'green',
            'orange'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 50, 100, 150],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgba(153, 102, 255, 0.6)',
              'rgb(255, 205, 86)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            hoverOffset: 4
          }]
        
    },
    options: {
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'doughnut', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        },
    }
});





new Chart(ctx7, {
    type: 'pie',
    title: 'hello' , 
    data: {
      labels: ['January', 'February', 'March', 'Aprel', 'May', 'June' , 'Julay'],
      datasets: [
        {
        data: [12, 19, 3, 5, 2, 8],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        },
      ]
    },
    options: {
        responsive: false ,
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true, 
                text: 'pie', 
                font: {
                    size: 18, 
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                align: 'center', 
                color: '#333' 
            }
        },
    }
});
























// const ctx = document.getElementById('myChart3').getContext('2d');
// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: [300, -200, 100, 600, -400, 500, -100],
//             backgroundColor: 'rgba(255, 206, 86, 0.6)',
//             borderColor: 'rgba(255, 206, 86, 1)',
//             borderWidth: 1,
//         },
//         {
//             label: 'Dataset 2',
//             data: [-500, 400, -300, 200, 100, -600, 50],
//             backgroundColor: 'rgba(153, 102, 255, 0.6)',
//             borderColor: 'rgba(153, 102, 255, 1)',
//             borderWidth: 1,
//         },
//     ],
// };

// const config = {
//     type: 'bar',
//     data: data,
//     options: {
//         indexAxis: 'x', 
//         scales: {
//             x: {
//                 beginAtZero: true,
//             },
//         },
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'right',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Horizontal Bar Chart',
//             },
//         },
//     },
// };

// const horizontalBarChart = new Chart(ctx, config);