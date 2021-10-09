package com.revature.proj2backend.entities.enums;

import java.util.HashMap;
import java.util.Map;

public enum eRole {
	ADMIN("ADMIN"),
	USER("USER"),
	OTHER("OTHER");
	private final String value;
	
	private eRole(String value) {
		this.value = value;
	}
	
	public String toString() {
		return this.value;
	}
	
    private static final Map<String, eRole> lookup = new HashMap<>();
    
    static
    {
        for(eRole sta : eRole.values())
        {
            lookup.put(sta.toString(), sta);
        }
    }

    public static eRole get(String url) 
    {
        return lookup.get(url);
    }

}
