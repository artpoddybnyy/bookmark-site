package com.artp.repository;

import com.artp.domain.BookMark;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookMarkRepository extends CrudRepository<BookMark, Long> {


}
