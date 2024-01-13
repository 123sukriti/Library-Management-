DELIMITER //
CREATE PROCEDURE DeleteBooksByYear(IN publicationYear INT)
BEGIN
    DELETE FROM books WHERE publication_year = publicationYear;
END //
DELIMITER ;
CALL DeleteBooksByYear(2020);

DELIMITER //
CREATE PROCEDURE UpdateBookTitleByAuthor(IN authorName VARCHAR(255), IN newTitle VARCHAR(255))
BEGIN
    UPDATE books SET title = newTitle WHERE author = authorName;
END //
DELIMITER ;
CALL UpdateBookTitleByAuthor('J.D. Salinger', 'New Title');

DELIMITER //
CREATE PROCEDURE SearchBookById(IN bookId INT)
BEGIN
    SELECT * FROM books WHERE id = bookId;
END //
DELIMITER ;
CALL SearchBookById(2);

// insert queries is their on nodejs