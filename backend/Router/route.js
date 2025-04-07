const pool = require('../config/db');
const express = require('express')
const bcrypt = require("bcrypt")

const route = express.Router()

route.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if email already exists
    const checkSql = 'SELECT * FROM users WHERE email = ?';
    pool.query(checkSql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // If not found, proceed with inserting
        try {
            const hashed = await bcrypt.hash(password, 10);
            const insertSql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            pool.query(insertSql, [name, email, hashed], (err, result) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json({ message: 'User registered successfully' });
            });
        } catch (hashError) {
            return res.status(500).json({ error: 'Password hashing failed' });
        }
    });
});

route.get("/login", (req,res) => {
    const {email, password} = req.query;

    const checkSql = 'SELECT * FROM users WHERE email = ?'

    pool.query(checkSql, [email], async (err, results) => {

        if (err) {
            console.log("error")
            return res.status(500).json({ err: err.message})
        }

        if (!results){
            res.status(401).json({message: 'User not registered, Please register first!'})
        }

        // If found, proceed checking the password
        try {
            const passwordCheckSql = 'select password from users where email = ?';
            const getNameSql = 'select name from users where email = ?'
            pool.query(passwordCheckSql, [email], (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                bcrypt.compare(password,result[0].password, (err, isMatch)=>{
                    if (err) return res.status(500).json({error:err.message});

                    if (isMatch){
                        pool.query(getNameSql, [email], (err, resultName)=>{
                            if (err) return res.status(500).json({error:err.message});
                            return res.status(201).json({ message: 'User loged in Successfully', name:  resultName[0].name});
                        })
                    } else {
                        return res.status(400).json({message: 'Wrong password try again!'})
                    }
                })
            });
        } catch (hashError) {
            return res.status(500).json({ error: 'Password hashing failed' });
        }
    });
})

module.exports = route