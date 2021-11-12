package constants;

public interface QuestionConstants {
	public static final String QUERY_MIN_COUNT_QUESTION_MODULE = "SELECT MIN(questionId) FROM QUESTION WHERE MODULE = 'APTITUDE'";
	public static final String QUERY_MAX_COUNT_QUESTION_MODULE = "SELECT MAX(questionId) FROM QUESTION WHERE MODULE = 'APTITUDE'";
	public static final String QUERY_GET_QUESTION_BY_ID = "SELECT * FROM QUESTIONS WHERE QUESTION_ID = ?1";
}
