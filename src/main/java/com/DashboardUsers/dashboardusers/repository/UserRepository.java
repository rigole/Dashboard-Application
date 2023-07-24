package com.DashboardUsers.dashboardusers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.DashboardUsers.dashboardusers.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
	
	
	
}
