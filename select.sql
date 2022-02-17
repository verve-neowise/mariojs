--Faqat bittasini olish
SELECT provayder.tel FROM users INNER JOIN provayder ON users.provayder_id == provayder.id;

--Kopiroq
SELECT provayder.tel, users.name FROM users INNER JOIN provayder ON users.provayder_id == provayder.id;

--Tahallus berish (nomini qisqartirish)
SELECT provayder.tel as tel, users.name as name FROM users INNER JOIN provayder ON users.provayder_id == provayder.id;