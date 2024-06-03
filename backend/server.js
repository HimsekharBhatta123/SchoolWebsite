const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const session=require('express-session')

const app = express()

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, 
  })
);
app.use(cors())
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school'
})

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});


//..............Student ....................
app.post('/submit-form',(req, res) => {
  const { name, email,classes} = req.body;

  const sql = 'INSERT INTO students (name, email,classes) VALUES (?, ?, ?)';
  db.query(sql, [name, email,classes], (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});


app.get('/submit-form/admin',(req, res) => {
  const sql = 'SELECT * from students';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result);
      console.log(result)
    }
  });
});

// Deleting student data...............

app.delete('/submit-form/admin/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM students WHERE id=?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});

//............Login...................


app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE `email`= ? AND `password`= ?"
  db.query(sql, [req.body.email,req.body.password], (err, data) => {
    if (err) {
        return res.json("Error")
    } if(data.length>0) {
        return  res.json("Success")
    }else{
      return  res.json("fail")
    }
  })
})



//Curriculum class-schedule and class-subjects

//Display in admin side
app.get('/curriculum/class-schedule/show', (req, res) => {
  const sql = 'SELECT * from school_hours';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result);
      console.log(result)
    }
  });
});

//Display in user side
app.get('/curriculum/class-schedule', (req, res) => {
  const sql = 'SELECT day,time,clas,subjects FROM `school_hours` INNER JOIN class_subject on school_hours.id=class_subject.classes';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result);
      console.log(result)
    }
  });
});
//.....................Updating Data.......................
app.put('/curriculum/class-schedule/class_schedule/:id',(req,res)=>{
  const { id } = req.params;
  const {day,time,clas} = req.body;

  const sql = 'UPDATE school_hours SET day = ?, time = ?, clas = ? WHERE id = ?';
  const values = [day,time,clas,id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL update error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data updated successfully');
      res.status(200).send('Data updated successfully');
    }
  });
})
//....................Inserting New Data......................
app.post('/curriculum/class-schedule/class_schedule/create',(req,res)=>{
  const {day,time,clas} = req.body;

  const sql = 'INSERT INTO school_hours (day, time, clas ) VALUES (?, ?, ?)';
  const values = [day, time, clas];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
})
//..................Deleting Data........................
app.delete('/curriculum/class-schedule/class_schedule/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM school_hours WHERE id=?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});

//..............Subjects.............................
app.get('/curriculum/class-subjects', (req, res) => {
  const sql = 'SELECT * FROM class_subject';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result);
    }
  });
});
//...............Updating Data......................
app.put('/curriculum/class-subjects/class_subjects/:id',(req,res)=>{
  const { id } = req.params;
  const { subjects,classes } = req.body;

  const sql = "UPDATE `class_subject` SET `subjects` = ? ,`classes` = ? WHERE `class_subject`.`id` = ?";
  const values = [subjects,classes,id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL update error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data updated successfully');
      res.status(200).send('Data updated successfully');
    }
  });
})

//................Inserting New Data.....................
app.post('/curriculum/class-subjects/class_subjects/create', (req, res) => {
  const {subjects,classes} = req.body;

  const sql = "INSERT INTO `class_subject` (`subjects`, `classes`) VALUES (?, ?)";
  const values = [subjects,classes];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});
//...................Deleting Data.........................
app.delete('/curriculum/class-subjects/class_subjects/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM class_subject WHERE id=?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});



//Fees_Structure...................................

app.get('/about',(req,res)=>{
  const sql="SELECT * FROM fees_structure";
  db.query(sql,(err,result)=>{
    if(err){
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result)
    }
  })
})

//Admission Fees of a student
app.get('/about/admin', (req, res) => {
  const sql = 'SELECT name,email,fees_class,amount FROM fees_structure INNER JOIN students on fees_structure.id=students.classes;';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result);
      console.log(result)
    }
  });
});

app.delete('/about/admin-fees/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM fees_structure WHERE id=?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});
//..............Updating Data........................
app.put('/about/fees_structure/:id', (req, res) => {
  const { id } = req.params;
  const { fees_class, amount } = req.body;

  const sql = 'UPDATE fees_structure SET fees_class = ?, amount = ? WHERE id = ?';
  const values = [fees_class, amount, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL update error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data updated successfully');
      res.status(200).send('Data updated successfully');
    }
  });
});

//...........Inserting New data...................
app.post('/about/fees_structure/create', (req, res) => {
  const { fees_class, amount } = req.body;

  const sql = 'INSERT INTO fees_structure (fees_class, amount) VALUES (?, ?)';
  const values = [fees_class, amount];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});
//..............Deleting Data......................
app.delete('/about/fees_structure/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM fees_structure WHERE id=?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});



//Teachers........................
//...........Fetching Data from Backend...................
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM teachers';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ err: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

//Subjects taught by our Teachers..............
app.get('/curriculum/teachers', (req, res) => {
  const sql = 'select name, qualification, subjects from teachers inner join class_subject on teachers.t_subject=class_subject.id;';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ err: 'Failed to fetch data' });
    } else {
      res.json(result);
    }
  });
});

//..............Updating Data............................
app.put('/teachers/:id', (req, res) => {
  const { id } = req.params;
  const { name,qualification,t_subject } = req.body;

  const sql = 'UPDATE teachers SET name = ?, qualification = ?, t_subject= ? WHERE id = ?';
  const values = [name,qualification,t_subject, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL update error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data updated successfully');
      res.status(200).send('Data updated successfully');
    }
  });
});

//................Inserting new Data........................
app.post('/teachers/create', (req, res) => {
  const { name, qualification, t_subject } = req.body;

  const sql = 'INSERT INTO teachers (name, qualification, t_subject) VALUES (?, ?, ?)';
  const values = [name, qualification, t_subject];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});


//..................Deleting Data.......................
app.delete('/teachers/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM teachers WHERE id=?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});


//.............Notice.......................
app.post('/notice/post',(req,res)=>{
  const {description,timing}=req.body
  const sql = 'INSERT INTO notices (description,timing) VALUES (?, ?)';
  const values = [description,timing];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
})
//............Fetching data..................
app.get('/notice', (req, res) => {
  const sql = 'SELECT * FROM notices';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ err: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

//..............Deleting Data.................
// app.delete('/notice/delete/:nid', (req, res) => {
//   const { nid } = req.params;

//   const sql = 'DELETE FROM notices WHERE nid=?';
//   const values = [nid];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('MySQL deletion error:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Data deleted successfully');
//       res.status(200).send('Data deleted successfully');
//     }
//   });
// });
app.delete('/notice/delete/:nid', (req, res) => {
  const { nid } = req.params;

  const sql = 'DELETE from notices where nid=?';
  const values = [nid];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL deletion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data deleted successfully');
      res.status(200).send('Data deleted successfully');
    }
  });
});



app.use(express.json())

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

