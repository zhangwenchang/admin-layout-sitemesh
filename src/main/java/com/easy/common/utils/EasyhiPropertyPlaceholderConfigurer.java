package com.easy.common.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;

public class EasyhiPropertyPlaceholderConfigurer extends
		PropertyPlaceholderConfigurer {
	private static Map<String, String> ctxPropertiesMap = new HashMap<String, String>();

	@Override
	protected void processProperties(
			ConfigurableListableBeanFactory beanFactoryToProcess,
			Properties props) throws BeansException {
		super.processProperties(beanFactoryToProcess, props);
		for (Object key : props.keySet()) {
			String keyStr = key.toString();
			String value = props.getProperty(keyStr);
			ctxPropertiesMap.put(keyStr, value);
		}
	}

	/**
	 * 查找属性对应的值
	 * @param name
	 * @return
	 */
	public static String getContextProperty(String name) {
		return ctxPropertiesMap.get(name);
	}
	
	/**
	 * 查找所有属性值
	 * @return 
	 */
	public static Map<String,String> getPropertiesMap(){
		return ctxPropertiesMap;
	}
}
