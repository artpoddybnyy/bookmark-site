package com.artp.repository;

import com.artp.domain.BookmarksCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookMarkCategoryRepository extends CrudRepository<BookmarksCategory, Long> {

}
