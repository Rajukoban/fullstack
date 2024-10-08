package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.AadharCartUpdate;

public interface AadharCartRepository extends JpaRepository<AadharCartUpdate, Long> {

}
