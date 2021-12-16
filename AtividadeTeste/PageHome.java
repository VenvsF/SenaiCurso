package testFonts;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PageHome {

	private WebDriver Driver;

	@Before
	public void SetUp() {
		System.setProperty("webdriver.chrome.driver", System.getenv("driver"));
		Driver = new ChromeDriver();
		Driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		Driver.manage().window().maximize();
		Driver.get("https://google.com/");

	}

	@Test
	public void AcessSite() {
		// buscar
		Driver.findElement(By.className("gLFyF")).sendKeys("Senai");
		Driver.findElement(By.className("gLFyF")).sendKeys(Keys.ENTER);
		Driver.findElement(By.className("LC20lb")).click();
		Driver.findElement(By.id("idControle_0")).click();
		Driver.findElement(By.id("ct100_Header1_MenuSuperior1_rptMenuLateral_ct100_rptMenu_ct105_lnkMenu")).click();
		Driver.findElement(By.id("oqEstabuscando")).click();
		Driver.findElement(By.id("oqEstabuscando")).sendKeys("técnico");
		// Clicar no link de pesquisa
		Driver.findElement(By.className("btnBuscaJavaScript")).click();
		Driver.findElement(By.xpath("//*[@id=\"ct100_cp_lv_crtl1_lnkTitu\"]/span")).click();
	}

	public void fecharNavegador(WebDriver Driver) {
		Driver.quit();
	}

	public void navParaNovaAba() {
		ArrayList<String> tabs = new ArrayList<String>(Driver.getWindowHandles());
		Driver.switchTo().window(tabs.get(1));
		Driver.findElement(By.id("lnkCaseBtn")).click();
		Driver.switchTo().window(tabs.get(2));
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@After
	public void fechar() {
		Driver.close();
	}
}
