const asynchandler= require("express-async-handler")
const Contact =require("../models/Contactmodel")
//@desc Get all Contacts
//@route Get /api/contacts
//@access public
const getContacts=asynchandler(async(req,res)=>{
    const contacts= await Contact.find()
    res.status(200).json(contacts)
});



//@desc Create New Contacts
//@route POST /api/contacts
//@access public


const createContact=asynchandler(async(req,res)=>{
    console.log("the reqquested contact is:", req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone)
        {
            throw new Error(400,"all fields are mandatory");
        }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    
    res.status(201).json(contact)
});

//@desc Get contact
//@route Get /api/contacts/:id
//@access public


const getContact=asynchandler(async(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
});

//@desc Update contact
//@route Put/api/contacts/:id
//@access public


const updateContact=asynchandler(async(req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`})
});


//@desc Delete contact
//@route Put/api/contacts/:id
//@access public


const deleteContact=asynchandler(async(req,res)=>{
    res.status(201).json({message:`Delete contact for ${req.params.id}`})
});



module.exports={getContacts,createContact,getContact,updateContact,deleteContact};