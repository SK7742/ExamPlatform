package utility;

import java.io.File;
import java.security.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.example.application.model.Question;
import com.example.application.model.TestResponse;

public class BuildResponseXmlForTest {
	public String fileNameWithFilePath = "D:\\Project\\LearingSpringUsingSTS\\ExamPlatform\\TestResponses\\xmlFile\\";
	
	public boolean createXmlResponseFile(List<TestResponse> response, String userName) {
		try {
			Date date = new Date();
			String dateAsString = date.toString();
			fileNameWithFilePath = fileNameWithFilePath + userName + ".xml";
			DocumentBuilderFactory builderFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = builderFactory.newDocumentBuilder();
			Document document = builder.newDocument();
			
			//Root Element
			Element root = document.createElement(userName + "TestResponse");
			document.appendChild(root);
			
			//TimeStamp Node
			Element testDetails = document.createElement("TestDeatils");
			root.appendChild(testDetails);
			
			Element testDate = document.createElement("TestDate");
			testDate.appendChild(document.createTextNode(dateAsString));
			testDetails.appendChild(testDate);	
			
			
			response.forEach((TestResponse) ->{
				String question = TestResponse.getQuestion();
				String questionId = TestResponse.getQuestionId().toString();
				String optionA = TestResponse.getOptionA();
				String optionB = TestResponse.getOptionB();
				String optionC = TestResponse.getOptionC();
				String optionD = TestResponse.getOptionD();
				String userResponse = Character.toString(TestResponse.getUserResponse());
				
				Element questionDetails = document.createElement("QuestionDetails");
				root.appendChild(questionDetails);
				
				Element questionIdNode = document.createElement("QuestionId");
				questionIdNode.appendChild(document.createTextNode(questionId));
				questionDetails.appendChild(questionIdNode);
				
				Element questionNode = document.createElement("Question");
				questionNode.appendChild(document.createTextNode(question));
				questionDetails.appendChild(questionNode);
				
				Element optionANode = document.createElement("OptionA");
				optionANode.appendChild(document.createTextNode(optionA));
				questionDetails.appendChild(optionANode);
				
				Element optionBNode = document.createElement("OptionB");
				optionBNode.appendChild(document.createTextNode(optionB));
				questionDetails.appendChild(optionBNode);
				
				Element optionCNode = document.createElement("OptionC");
				optionCNode.appendChild(document.createTextNode(optionC));
				questionDetails.appendChild(optionCNode);
				
				Element optionDNode = document.createElement("OptionD");
				optionDNode.appendChild(document.createTextNode(optionD));
				questionDetails.appendChild(optionDNode);
				
				Element userResponseNode = document.createElement("UserResponse");
				userResponseNode.appendChild(document.createTextNode(userResponse));
				questionDetails.appendChild(userResponseNode);
				
			});
			
			TransformerFactory factory = TransformerFactory.newInstance();
			Transformer transformer = factory.newTransformer();
			DOMSource domSource = new DOMSource(document);
			StreamResult result = new StreamResult(new File(fileNameWithFilePath));
			transformer.transform(domSource, result);
			System.out.println("Done creating XML File");
		}catch (ParserConfigurationException pce) {
            pce.printStackTrace();
        } catch (TransformerException tfe) {
            tfe.printStackTrace();
        }
		return false;
	}
}
