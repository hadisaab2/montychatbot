const steps= [
    {
        id:1,
        message:"Good day!",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:2,
        end:false
    },
    {
        id:2,
        message:"Welcome to MontyMobile,a leading VAS & telecom solutions provider and an international SMS wholesale intermediary hub. MontyMobile includes a wide range of Fintech,Data Monetixation,loT and Mobile Advertising solutions.",
        componentboolean:false,
        customcomponent :null,
        options:null,
        user:false,
        trigger:3,
        end:false
    },
    {
        id:3,
        message:"Please enter your name",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:4,
        end:false
    },
    {
        id:4,
        message:null,
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:true,
        trigger:5,
        end:false
    },
    {
        id:5,
        message:"Welcome hadi",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:6,
        end:false

    },
    {
        id:6,
        message:"Please enter your email",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:7,
        end:false

    },
    {
        id:7,
        message:null,
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:true,
        trigger:8,
        end:false

    },
    {
        id:8,
        message:"Please enter your phonenumber",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:9,
        end:false

    },
    {
        id:9,
        message:null,
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:true,
        trigger:10,
        end:false

    },
    {
        id:10,
        message:"Choose your favorite interests",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:11,
        end:false

    },
    {
        id:11,
        message:null,
        componentboolean:true,
        customcomponent : "categories",
        options:null,
        user:true,
        end:false

    },
    {
        id: "Messaging",
        message: "Choose your favorite Messaging categories",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger: 12,
        end:false


    },
    {
        id: "Gaming",
        message: "Choose your favorite Gamin categories",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger: 13,
        end:false

    },
    {
        id: "Industry",
        message: "Choose your favorite Industry categories",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger: 14,
        end:false
    },
    {
        id: "Monetization",
        message: "Choose your favorite Monetization categories",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger: 15,
        end:false
        
    },
    {
        id:12,
        message:null,
        componentboolean:true,
        customcomponent : "interests",
        options:[],
        user:true,
        trigger:16,
        end:false

    },
    {
        id:13,
        message:null,
        componentboolean:true,
        customcomponent : "interests",
        options:[],
        user:true,
        trigger:16,
        end:false

    },
    {
        id:14,
        message:null,
        componentboolean:true,
        customcomponent : "interests",
        options:[],
        user:true,
        trigger:16,
        end:false

    },
    {
        id:15,
        message:null,
        componentboolean:true,
        customcomponent : "interests",
        options:[],
        user:true,
        trigger:16,
        end:false

    },
    {
        id:15,
        message:null,
        componentboolean:true,
        customcomponent : "yesno",
        options:[],
        user:true,
        //if yes call step of another interests if no call step of bye
        end:false

    },
    {
        id:15,
        message:"Tanks",
        componentboolean:false,
        customcomponent : null,
        options:null,
        user:false,
        trigger:null,
        end:true

    }
]