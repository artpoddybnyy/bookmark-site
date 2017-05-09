package com.artp.repository;

import com.artp.domain.BookmarksCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends CrudRepository<BookmarksCategory, Long> {

}
