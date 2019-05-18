<?php

   class User {
      var $id;
      var $login;
      var $name;
      var $email;
      var $mobileno;
      var $photo;
      var $roles;
   }

   class Application {
      var $id;
      var $name;
      var $cape;
      var $mask;
      var $costume;
      var $superpower;
      var $verify;
      var $addeddate;
   }

   class Contact {
      var $id;
      var $name;
      var $email;
      var $mobileno;
      var $photo;
      var $addeddate;
      var $status;
   }



   class DbStatus {
      var $status;
      var $error;
      var $lastinsertid;
   }

   function time_elapsed_string($datetime, $full = false) {

      if ($datetime == '0000-00-00 00:00:00')
         return "none";

      if ($datetime == '0000-00-00')
         return "none";

      $now = new DateTime;
      $ago = new DateTime($datetime);
      $diff = $now->diff($ago);

      $diff->w = floor($diff->d / 7);
      $diff->d -= $diff->w * 7;

      $string = array(
         'y' => 'year',
         'm' => 'month',
         'w' => 'week',
         'd' => 'day',
         'h' => 'hour',
         'i' => 'minute',
         's' => 'second',
      );
      
      foreach ($string as $k => &$v) {
         if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
         } else {
            unset($string[$k]);
         }
      }

      if (!$full) $string = array_slice($string, 0, 1);
         return $string ? implode(', ', $string) . ' ago' : 'just now';
   }

	class Database {
 		protected $dbhost;
    	protected $dbuser;
    	protected $dbpass;
    	protected $dbname;
    	protected $db;

 		function __construct( $dbhost, $dbuser, $dbpass, $dbname) {
   		$this->dbhost = $dbhost;
   		$this->dbuser = $dbuser;
   		$this->dbpass = $dbpass;
   		$this->dbname = $dbname;

   		$db = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
         $db->setAttribute(PDO::MYSQL_ATTR_FOUND_ROWS, true);
    		$this->db = $db;
   	}

      function beginTransaction() {
         try {
            $this->db->beginTransaction(); 
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function commit() {
         try {
            $this->db->commit();
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function rollback() {
         try {
            $this->db->rollback();
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function close() {
         try {
            $this->db = null;   
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function insertUser($login, $clearpassword, $name, $email, $roles) {

         //hash the password using one way md5 hashing
         $passwordhash = salt($clearpassword);
         try {
            
            $sql = "INSERT INTO users(login, password, name, email, addeddate, roles) 
                    VALUES (:login, :password, :name, :email, NOW(), :roles)";

            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("login", $login);
            $stmt->bindParam("password", $passwordhash);
            $stmt->bindParam("name", $name);
            $stmt->bindParam("email", $email);
            $stmt->bindParam("roles",$roles);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";
            $dbs->lastinsertid = $this->db->lastInsertId();

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      }

      function checkemail($email) {
         $sql = "SELECT *
                 FROM users
                 WHERE email = :email";

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("email", $email);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();
         return $row_count;
      }

      function authenticateUser($login) {
         $sql = "SELECT login, password as passwordhash
                 FROM users
                 WHERE login = :login";        

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("login", $login);
         $stmt->execute(); 
         $row_count = $stmt->rowCount(); 

         $user = null;

         if ($row_count) {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
               $user = new User();
               $user->login = $row['login'];
               $user->passwordhash = $row['passwordhash'];
            }
         }

         return $user;
      }

      /////////////////////////////////////////////////////////////////////////////////// 

      function insertApplication($name, $cape, $mask, $costume, $superpower, $verify, $ownerlogin) {

         try {
            
            $sql = "INSERT INTO applications(name, cape, mask, costume, superpower, ownerlogin, addeddate, verify ) 
                    VALUES (:name, :cape, :mask, :costume, :superpower, :ownerlogin, NOW(), :verify  )";

            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("name", $name);
            $stmt->bindParam("cape", $cape);
            $stmt->bindParam("mask", $mask);
            $stmt->bindParam("costume", $costume);
            $stmt->bindParam("superpower", $superpower);
            $stmt->bindParam("verify", $verify);
            $stmt->bindParam("ownerlogin", $ownerlogin);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";
            $dbs->lastinsertid = $this->db->lastInsertId();

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         }          
      }

      //get all applications
      function getAllApplication() {
         $sql = "SELECT *
                 FROM applications
                 ";

         $stmt = $this->db->prepare($sql);
         // $stmt->bindParam("ownerlogin", $ownerlogin);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();

         $data = array();

         if ($row_count)
         {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
               $application = new Application();
               $application->id = $row['id'];
               $application->name = $row['name'];
               $application->cape = $row['cape'];
               $application->mask = $row['mask'];
               $application->costume = $row['costume'];
               $application->superpower = $row['superpower'];
               $addeddate = $row['addeddate'];
               $application->addeddate = time_elapsed_string($addeddate); 

               $application->verify = $row['verify'];  

               array_push($data, $application);
            }
         }

         return $data;
      }

      function deleteApplicationViaId($id) {

         $dbstatus = new DbStatus();

         $sql = "DELETE 
                 FROM applications 
                 WHERE id = :id";

         try {
            $stmt = $this->db->prepare($sql); 
            $stmt->bindParam("id", $id);
            $stmt->execute();

            $dbstatus->status = true;
            $dbstatus->error = "none";
            return $dbstatus;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbstatus->status = false;
            $dbstatus->error = $errorMessage;
            return $dbstatus;
         }           
      } 
      






      


      

      function getRoles() {
         $sql = "SELECT roles
                 FROM users
                 ";

         $stmt = $this->db->prepare($sql);
         // $stmt->bindParam("ownerlogin", $ownerlogin);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();

         $data = array();

         if ($row_count)
         {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
               $contact = new Contact();
               $contact->id = $row['roles'];
              
               array_push($data, $contact);
            }
         }

         return $data;
      }


      

      

   }