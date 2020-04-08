json.book do
  json.extract! @book, :id, :description, :title, :author, :publisher, :isbn, :pages, :release_date, :cover_url, :reviews
  # json.photoURL url_for(@book.photo)
  json.average_rating @book.average_rating
  json.reviews @book.reviews

  json.reviewIds @book.reviews.pluck(:id)
  json.reviewAuthorIds @book.reviews.pluck(:user_id)
end