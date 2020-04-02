package com.easy.common.utils;

import java.text.DateFormat;
import java.text.DateFormatSymbols;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;

import org.apache.commons.lang.StringUtils;

public class DateUtil {

	public static final String PATTERN_1 = "yyyyMMddHHmmss";
	public static final String PATTERN_2 = "yyyy-MM-dd HH:mm:ss";
	public static final String PATTERN_3 = "yyyy-MM-dd";
	public static final String PATTERN_4 = "yyyyMMdd";
	public static final String PATTERN_5 = "HHmmss";
	public static final String PATTERN_6 = "yyyy-MM-dd HH:mm";
	public static final String PATTERN_7 = "yyyy年MM月dd日";

	/*
	 * 获取当前时间
	 */
	public static String getTime() {
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);
		String sj_str = dateFormat.format(new Date());

		return sj_str;
	}

	/*
	 * 获取当前日期
	 */
	public static String getDate() {
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);
		String sj_str = dateFormat.format(new Date());

		return sj_str;
	}

	/*
	 * 获取当前日期
	 */
	public static String getDate(String formatstr) {
		SimpleDateFormat dateFormat = new SimpleDateFormat(formatstr);
		String sj_str = dateFormat.format(new Date());

		return sj_str;
	}

	/*
	 * 格式化时间
	 */
	public static String formatTime(String pattern, String timeStr) {
		if (null == timeStr) {
			return null;
		}

		SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
		Date date = parseTime(timeStr, pattern);
		String sj_str = dateFormat.format(date);

		return sj_str;
	}

	/*
	 * 格式化时间
	 */
	public static String formatTime(Date time) {
		if (null == time) {
			return null;
		}

		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);
		String sj_str = dateFormat.format(time);

		return sj_str;
	}

	/*
	 * 格式化时间
	 */
	public static String formatTime(String pattern, Date time) {
		if (null == time) {
			return null;
		}

		SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
		String sj_str = dateFormat.format(time);

		return sj_str;
	}

	/*
	 * 格式化日期
	 */
	public static String formatDate(String dateStr) {
		if (null == dateStr) {
			return null;
		}
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);
		Date date = parseDate(dateStr);
		String sj_str = dateFormat.format(date);

		return sj_str;
	}

	/*
	 * 格式化日期
	 */
	public static String formatDate(String pattern, String dateStr) {
		if (null == dateStr) {
			return null;
		}
		SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
		Date date = parseDate(pattern, dateStr);
		String sj_str = dateFormat.format(date);

		return sj_str;
	}

	/*
	 * 格式化日期
	 */
	public static String formatDate(Date date,String pattern) {
		if (null == date) {
			return null;
		}
		SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
		String sj_str = dateFormat.format(date);

		return sj_str;
	}

	/*
	 * 解析日期字符串
	 */
	public static Date parseDate(String pattern, String dateStr) {
		if (null == dateStr) {
			return null;
		}
		Date date = null;

		SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);

		try {
			date = dateFormat.parse(dateStr);
		} catch (ParseException e) {
		}

		return date;
	}

	/*
	 * 解析日期字符串
	 */
	public static Date parseDate(String dateStr) {
		if (null == dateStr) {
			return null;
		}
		Date date = null;

		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);

		try {
			date = dateFormat.parse(dateStr);
		} catch (ParseException e) {
		}

		return date;
	}

	/*
	 * 解析时间字符串
	 */
	public static Date parseTime(String timeStr) {
		if (null == timeStr || timeStr.equals("")) {
			return null;
		}
		Date date = null;
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);
		try {
			date = dateFormat.parse(timeStr);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date;
	}

	/*
	 * 解析时间字符串
	 */
	public static Date parseTime(String timeStr, String pattern) {
		if (null == timeStr || timeStr.equals("")) {
			return null;
		}
		Date date = null;
		SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
		try {
			date = dateFormat.parse(timeStr);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date;
	}

	/*
	 * 时间偏移运算
	 */
	public static String getTime(int skipDay) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(new Date());

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 某一时间的偏移运算
	 */
	public static String getTime(String timeStr, int skipDay) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(parseTime(timeStr));

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 某一时间的偏移运算
	 */
	public static String getTime(Date time, int skipDay) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(time);
		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);
		return dateFormat.format(cal.getTime());
	}

	/*
	 * 日期偏移运算(增、减几日）
	 */
	public static String getDate(int skipDay) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(new Date());

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 日期偏移运算(增、减几日）
	 */
	public static String getDate(String dateStr, int skipDay) {
		if (null == dateStr) {
			return null;
		}

		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(parseDate(dateStr));

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 日期偏移运算(增、减几日）
	 */
	public static String getDate(Date date, int skipDay) {
		if (null == date) {
			return null;
		}

		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(date);

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 时间偏移运算(增、减几日、几小时、几分）
	 */
	public static String getTime(int skipDay, int skipHour, int skipMinute) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(new Date());

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		cal.add(GregorianCalendar.HOUR_OF_DAY, skipHour);
		cal.add(GregorianCalendar.MINUTE, skipMinute);

		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 某一时间的偏移运算(增、减几日、几小时、几分）
	 */
	public static String getTime(String timeStr, int skipDay, int skipHour, int skipMinute) {
		if (null == timeStr) {
			return null;
		}

		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(parseTime(timeStr));

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		cal.add(GregorianCalendar.HOUR_OF_DAY, skipHour);
		cal.add(GregorianCalendar.MINUTE, skipMinute);
		cal.get(GregorianCalendar.DAY_OF_WEEK_IN_MONTH);

		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_2);

		return dateFormat.format(cal.getTime());
	}

	/*
	 * 某一时间的偏移运算(增、减几日、几小时、几分）
	 */
	public static Date getDateTime(Date time, int skipDay, int skipHour, int skipMinute) {
		if (null == time) {
			return null;
		}

		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(time);

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		cal.add(GregorianCalendar.HOUR_OF_DAY, skipHour);
		cal.add(GregorianCalendar.MINUTE, skipMinute);
		cal.get(GregorianCalendar.DAY_OF_WEEK_IN_MONTH);
		return cal.getTime();
	}

	/*
	 * 计算日期相差几天
	 */
	public static long subtraction(Date minuend, Date subtrahend) {

		long daterange = minuend.getTime() - subtrahend.getTime();
		long time = 1000 * 3600 * 24;

		return (daterange % time == 0) ? (daterange / time) : (daterange / time + 1);
	}

	/*
	 * 计算日期相差的小时
	 */
	public static long subtractionHour(Date minuend, Date subtrahend) {

		long daterange = minuend.getTime() - subtrahend.getTime();
		long time = 1000 * 3600;

		return (daterange % time == 0) ? (daterange / time) : (daterange / time + 1);
	}

	/*
	 * 计算日期相差分钟
	 */
	public static long subtractionMinute(Date minuend, Date subtrahend) {

		long daterange = minuend.getTime() - subtrahend.getTime();
		long time = 1000 * 60;

		return (daterange % time == 0) ? (daterange / time) : (daterange / time + 1);
	}

	public static long getM(Date date) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(date);
		return cal.get(GregorianCalendar.DAY_OF_WEEK);
	}

	public static String getLastDate(String temp) { // 变量temp是看几天前的天数
		if (temp == null || temp.equals("")) {
			temp = "1";
		}
		int i = Integer.parseInt(temp);
		DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.MEDIUM);
		Calendar grc = Calendar.getInstance();
		grc.add(GregorianCalendar.DATE, -i);
		return dateFormat.format(grc.getTime());
	}

	// 获取上一年的日期（用来设置查询日期条件）
	public static String getLastYearDate() { // 上一年

		Calendar c = Calendar.getInstance();
		int y = c.get(Calendar.YEAR);
		String year = String.valueOf(y - 1);
		return year;
	}

	// 获取上个月的日期（用来设置查询日期条件）
	public static String getLastMonthDate() { // 上一月
		Calendar c = Calendar.getInstance();
		int y = c.get(Calendar.YEAR);
		int m = c.get(Calendar.MONTH) + 1;
		String month = null;
		String year = String.valueOf(y);
		if (m > 1) {
			if (m > 10) {
				month = String.valueOf(m - 1);
			} else {
				month = "0" + String.valueOf(m - 1);
			}
		} else {
			year = String.valueOf(y - 1);
			month = String.valueOf(12);
		}

		return year + "-" + month;
	}

	// 获取前一天的日期（用来设置查询日期条件）
	public static String getLastDayDate() { // 前一天
		Calendar c = Calendar.getInstance();
		int y = c.get(Calendar.YEAR);
		int m = c.get(Calendar.MONTH) + 1;
		int d = c.get(Calendar.DAY_OF_MONTH);
		int days = 0;
		if (m > 1) {
			days = getMonthsDays(m - 1, y);
		} else {
			days = 31;
		}
		String day = null;
		String month = null;
		String year = String.valueOf(y);
		if (d > 1) { // 大于1号
			day = String.valueOf(d - 1);
			if (m > 9) {
				month = String.valueOf(m);
			} else {
				month = "0" + String.valueOf(m);
			}
		} else if ((d < 2) && (m < 2)) { // 一月一号
			day = String.valueOf(31);
			month = String.valueOf(12);
			year = String.valueOf(y - 1);
		} else if ((d < 2) && (m > 2)) {
			day = String.valueOf(days);
			if (m > 10) {
				month = String.valueOf(m - 1);
			} else {
				month = "0" + String.valueOf(m - 1);
			}
		}

		return year + "-" + month + "-" + day;
	}

	// 判断是否闰年
	public static boolean isLeapYear(int year) {
		if ((((year % 4) == 0) && ((year % 100) != 0)) || ((year % 4) == 0) && ((year % 400) == 0)) {
			return true;
		} else {
			return false;
		}
	}

	// 获取每个月的天数
	public static int getMonthsDays(int month, int year) {
		if ((isLeapYear(year) == true) && (month == 2)) {
			return 29;
		} else if ((isLeapYear(year) == false) && (month == 2)) {
			return 28;
		}

		if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10)
				|| (month == 12)) {
			return 31;
		}
		return 30;
	}

	public static String getWeekDay() {
		DateFormatSymbols symboles = new DateFormatSymbols(Locale.getDefault());
		symboles.setShortWeekdays(new String[] { "", "7", "1", "2", "3", "4", "5", "6" });
		SimpleDateFormat date = new SimpleDateFormat("E", symboles);
		return date.format(new Date());
	}

	// 获取年
	public static int getYear() {
		Calendar c = Calendar.getInstance();
		return c.get(Calendar.YEAR);
	}

	// 获取月
	public static int getMonth() {
		Calendar c = Calendar.getInstance();
		return c.get(Calendar.MONTH);
	}

	// 获取日
	public static int getDay() {
		Calendar c = Calendar.getInstance();
		return c.get(Calendar.DAY_OF_MONTH);
	}

	public static String getLastMonthDay(int lastmonths) {
		int month = getMonth() + 1;
		if (month - lastmonths > 0) {
			return String.valueOf(getYear()) + "-" + String.valueOf(month - lastmonths) + "-1";
		} else {
			return String.valueOf(getYear() - 1) + "-" + String.valueOf(12 + month - lastmonths) + "-1";
		}
	}

	/*
	 * 获取当前时间
	 */
	public static String getTimestamp() {
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_1);
		String sj_str = dateFormat.format(new Date());
		return sj_str;
	}

	/*
	 * 获取当前日期
	 */
	public static String getDatestamp() {
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_4);
		String sj_str = dateFormat.format(new Date());
		return sj_str;
	}

	/*
	 * 格式化为时间戳字符串
	 */
	public static String formatDate(Date date) {
		if (null == date) {
			return "";
		}

		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);
		String sj_str = dateFormat.format(date);

		return sj_str;
	}

	/*
	 * 时间戳字符串还原为日期
	 */
	public static Date formatTimestamp2Date(String dateStr) {
		if (StringUtils.isBlank(dateStr)) {
			return null;
		}
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_3);
		Date date = null;
		try {
			date = dateFormat.parse(dateStr);
		} catch (ParseException e) {
		}
		return date;
	}

	//计算偏移分钟
	public static int calcSkipMinu(String start, String end) {
		long number = 0;
		long minu = 60L * 1000L;
		try {
			Date startDate = parseTime(start, PATTERN_1);
			Date endDate = parseTime(end, PATTERN_1);
			number = (endDate.getTime() - startDate.getTime()) / minu;
		} catch (Exception e) {
			Date startDate = parseTime(start, PATTERN_2);
			Date endDate = parseTime(end, PATTERN_2);
			number = (endDate.getTime() - startDate.getTime()) / minu;
		}
		return (int) number;
	}

	/*
	 * 获取当前时间
	 */
	public static String getTimeMin() {
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_6);
		String sj_str = dateFormat.format(new Date());

		return sj_str;
	}

	/*
	 * 时间偏移运算
	 */
	public static String getTimeMin(int skipDay) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(new Date());

		cal.add(GregorianCalendar.DAY_OF_MONTH, skipDay);
		SimpleDateFormat dateFormat = new SimpleDateFormat(PATTERN_6);

		return dateFormat.format(cal.getTime());
	}

	/**
	 * 获取2099最后一天
	 */
	public static Date getValidDate() {
		GregorianCalendar calendar = new GregorianCalendar();
		calendar.set(GregorianCalendar.YEAR, 2099);
		calendar.set(GregorianCalendar.MONTH, 11);
		calendar.set(GregorianCalendar.DAY_OF_MONTH, 31);
		calendar.set(GregorianCalendar.HOUR, 11);
		calendar.set(GregorianCalendar.MINUTE, 59);
		calendar.set(GregorianCalendar.SECOND, 59);
		return calendar.getTime();
	}
}