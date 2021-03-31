import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TestData {

    @Mock
    private Object object;

    @Test
    public void test() {
        Mockito.when(object).thenReturn(null);
    }

}
